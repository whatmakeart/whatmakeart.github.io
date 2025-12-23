---
title: 02.13 Interactive Sculpture
date: 2025-01-27T12:00:00Z
lastmod: 2025-12-23T10:12:35-04:00
---

## Assignment Deliverables

1. Upload a 5 second to 30 second video of an interactive sculpture reacting to user input.
   - Label the file YYYYMMDD Lastname Firstname Interactive Sculpture Video.mp4
2. Bring a version of the interactive sculpture to class for everyone to try.

## Overview

Now that we can capture basic user input with buttons, potentiometer knobs, and potential WiFi connected devicers, we will use this input to create simple interactive sculptures or experiences. Turning the potentiometer knob might decide when to move the servo motor or pressing the button might make a sound or blink a LED.

You can use the example sketches with user input from this lesson. You can build from the work you did on the previous [Servo Shenanigans Assignment]. It can be an expansion and refinement of your original, such as adding LEDs.

## Instructions

While these are experiments with kinetic sculpture, we still want to add enough structure and other materials to make them interesting and useable. Remember that the combination of electronics with other techniques tends to make more interesting and creative output. For example, simple attaching your potentiometer knob through a hole in sheet material makes it appear more robust and inviting to the user. If your servo motor is securely attached, then it will me more predictable and responsive.

Additional servo motors, stronger servo motors, longer wires, extra potentiometers and LEDs are available. Your instructor can help your set up additional devices. Below are some additional ideas and concepts to try out. Don't hesitate to ask questions about this or adding additional actions / inputs.

### Consider

- Hot glue to keep things in place
- Use scrap wood and hot glue to build quick structures
- Use wire to make mechanical parts
- Cover objects with scrap fabric

## Things to Try

- Use the ESP32 WROOM modules to make a web interface to control the sculptures. This will likely require the assistance of an LLM but it well within reach.
- Use random numbers to introduce "unpredictability" to make it seem more alive or real. When the knob turns it could turn the servo 2 degrees plus a random number that could even make it go backwards. `random()` + `randomSeed()` with `min() max()` can accomplish this.
- Use button to switch between the the Potentiometer controlling LEDs or a servo.
- Add translucent materials over LEDs
- Separate the buttons and the LEDs / Servo with longer wires

## Assistance

Don't hesitate to ask for help with:

- wiring
- coding
- adding features or behavior to code
- adding more servos
- adding more LEDs
- adding buttons
- anything else

#### Example Interactive Servo Prompt

Include all of the code from the [WiFiAccessPoint example](02-12-wireless-button-led.md) with one of these prompts or make your own.

- _"Adapt the included code to serve a webpage with buttons that turn the LED on and off. Include a slider control thst controls the sweep of a servo motor. Also include an 'auto servo' button that initiates a series of servo motions that increase in size in speed until hitting max and then decreasing size and speed. This cycle would loop, with subtle randomness until input is detected from the slider control. If the 'auto servo' button is pressed again then the servo loop starts again, also include a servo stop button that stops the servo loop."_

Which produces the code below:

```C
/*
  WiFiAccessPoint.ino creates a WiFi access point and provides a web server on it.

  Steps:
  1. Connect to the access point "yourAp"
  2. Point your web browser to http://192.168.4.1/
  3. Control the LED and Servo through the webpage

  Originally Created for arduino-esp32 on 04 July, 2018
  by Elochukwu Ifediora (fedy0)

  Modified to include Servo control and webpage on 2023-10-27
  by Gemini 2.0 Experimental Model
*/

#include <WiFi.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <ESP32Servo.h>

#ifndef LED_BUILTIN
#define LED_BUILTIN 2  // Set the GPIO pin where you connected your test LED
#endif

#define SERVO_PIN 18 // Define the GPIO pin connected to the servo motor

// Set these to your desired credentials.
const char *ssid = "yourAP";
const char *password = "yourPassword";

WebServer server(80);
Servo myservo;

int servoPos = 90; // Initial servo position
bool autoServoActive = false;
bool servoStopped = false;

// Function to handle the root page
void handleRoot() {
  String html = "<!DOCTYPE html>\n";
  html += "<html>\n";
  html += "<head>\n";
  html += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n";
  html += "<title>ESP32 Control</title>\n";
  html += "<style>\n";
  html += "body { font-family: Arial, sans-serif; text-align: center; }\n";
  html += "button { padding: 10px 20px; margin: 10px; font-size: 16px; }\n";
  html += ".slider { width: 80%; margin: 20px auto; }\n";
  html += "</style>\n";
  html += "</head>\n";
  html += "<body>\n";
  html += "<h1>ESP32 Web Server</h1>\n";
  html += "<h2>LED Control</h2>\n";
  html += "<button onclick=\"location.href='/ledon'\">LED ON</button>\n";
  html += "<button onclick=\"location.href='/ledoff'\">LED OFF</button>\n";
  html += "<h2>Servo Control</h2>\n";
  html += "<div class=\"slider\">\n";
  html += "<input type=\"range\" min=\"0\" max=\"180\" value=\"" + String(servoPos) + "\" id=\"servoSlider\" oninput=\"updateServo(this.value)\">\n";
  html += "<p>Servo Position: <span id=\"servoPos\">" + String(servoPos) + "</span></p>\n";
  html += "</div>\n";
  html += "<button onclick=\"location.href='/autoservo'\">Auto Servo</button>\n";
  html += "<button onclick=\"location.href='/stopservo'\">Stop Servo</button>\n";
  html += "<script>\n";
  html += "function updateServo(pos) {\n";
  html += "  document.getElementById(\"servoPos\").innerHTML = pos;\n";
  html += "  var xhttp = new XMLHttpRequest();\n";
  html += "  xhttp.open(\"GET\", \"/servo?pos=\"+pos, true);\n";
  html += "  xhttp.send();\n";
  html += "}\n";
  html += "</script>\n";
  html += "</body>\n";
  html += "</html>\n";
  server.send(200, "text/html", html);
}

// Function to handle LED ON
void handleLedOn() {
  digitalWrite(LED_BUILTIN, HIGH);
  server.sendHeader("Location", "/");
  server.send(303);
}

// Function to handle LED OFF
void handleLedOff() {
  digitalWrite(LED_BUILTIN, LOW);
  server.sendHeader("Location", "/");
  server.send(303);
}

// Function to handle servo control
void handleServo() {
  if (server.hasArg("pos")) {
    servoPos = server.arg("pos").toInt();
    myservo.write(servoPos);
    servoStopped = false; // If a manual control is done, then assume the servo isn't stopped
  }
  server.send(200, "text/plain", "OK");
}

// Function to handle auto servo
void handleAutoServo() {
  autoServoActive = !autoServoActive; // Toggle auto servo state
  if (autoServoActive){
      servoStopped = false;
  }
  server.sendHeader("Location", "/");
  server.send(303);
}

// Function to handle servo stop
void handleStopServo() {
  autoServoActive = false;
  servoStopped = true;
  server.sendHeader("Location", "/");
  server.send(303);
}


void setup() {
  // Allow allocation of all timers
  ESP32PWM::allocateTimer(0);
  ESP32PWM::allocateTimer(1);
  ESP32PWM::allocateTimer(2);
  ESP32PWM::allocateTimer(3);

  myservo.setPeriodHertz(50);    // standard 50 hz servo
  myservo.attach(SERVO_PIN, 500, 2400); // attaches the servo on pin 18 to the servo object

  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println("Configuring access point...");

  // You can remove the password parameter if you want the AP to be open.
  if (!WiFi.softAP(ssid, password)) {
    log_e("Soft AP creation failed.");
    while (1);
  }
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(myIP);

  // Set up the endpoints for the web server
  server.on("/", handleRoot);
  server.on("/ledon", handleLedOn);
  server.on("/ledoff", handleLedOff);
  server.on("/servo", handleServo);
  server.on("/autoservo", handleAutoServo);
  server.on("/stopservo", handleStopServo);

  server.begin();
  Serial.println("Server started");
}

void loop() {
  server.handleClient();

  if (autoServoActive && !servoStopped) {
    // Auto servo logic
    for (int i = 1; i <= 5; i++) {
        for (int j = 0; j < i; j++){
            int angle = random(0,180);
            int speed = random(5, 50); // Introduce a small delay between motions for some randomness

            if (servoStopped || !autoServoActive) break; // Escape the loop immediately if the servo is stopped or auto servo is deactivated

            myservo.write(angle);
            delay(speed);
        }
        if (servoStopped || !autoServoActive) break; // Escape the loop immediately if the servo is stopped or auto servo is deactivated
    }

    for (int i = 5; i >= 1; i--) {
        for (int j = 0; j < i; j++){
            int angle = random(0,180);
            int speed = random(5, 50); // Introduce a small delay between motions for some randomness

            if (servoStopped || !autoServoActive) break; // Escape the loop immediately if the servo is stopped or auto servo is deactivated

            myservo.write(angle);
            delay(speed);
        }
        if (servoStopped || !autoServoActive) break; // Escape the loop immediately if the servo is stopped or auto servo is deactivated
    }
  }
}
```
