---
title: 02.12 Wireless Button LED
date: 2025-01-27T12:00:00Z
lastmod: 2025-01-27T20:08:33
---

## ESP 32 Wifi Interaction

The ESP32 allows for dynamic interaction from wireless devices such as the touch screen on a cell phone. A webpage can be hosted on the ESP to show buttons for LEDs, sliders or virtual knobs for servo motors, and anything else that can be displayed as pixels on a screen.

### ESP32 Wifi Examples

After getting your ESP32 dev board set up, and you are able to successfully upload a sketch, then try the basic Wifi Access Point example sketch that comes with the `wifi.h` library. You can see the example sketch in the Arduino IDE by going to File > Examples ? WiFi > WiFiAccessPoint Then the Arduino IDE will open up a new sketch, the code from Expressif is also below and can be copied into a new sketch.

Make sure to set your own credentials, `const char *ssid = "yourAP";` and `const char *password = "yourPassword";` This will be the name of the WiFI network on the ESP32 and the password that you will enter to access it. Once you you upload the sketch, then you should see the wifi network available.

WiFiAccessPoint.ino example sketch is licencsed under the GNU Lesse Public Licencse from 
```C
/*
  WiFiAccessPoint.ino creates a WiFi access point and provides a web server on it.

  Steps:
  1. Connect to the access point "yourAp"
  2. Point your web browser to http://192.168.4.1/H to turn the LED on or http://192.168.4.1/L to turn it off
     OR
     Run raw TCP "GET /H" and "GET /L" on PuTTY terminal with 192.168.4.1 as IP address and 80 as port

  Created for arduino-esp32 on 04 July, 2018
  by Elochukwu Ifediora (fedy0)
*/

#include <WiFi.h>
#include <NetworkClient.h>
#include <WiFiAP.h>

#ifndef LED_BUILTIN
#define LED_BUILTIN 2  // Set the GPIO pin where you connected your test LED or comment this line out if your dev board has a built-in LED
#endif

// Set these to your desired credentials.
const char *ssid = "yourAP";
const char *password = "yourPassword";

NetworkServer server(80);

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println("Configuring access point...");

  // You can remove the password parameter if you want the AP to be open.
  // a valid password must have more than 7 characters
  if (!WiFi.softAP(ssid, password)) {
    log_e("Soft AP creation failed.");
    while (1);
  }
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(myIP);
  server.begin();

  Serial.println("Server started");
}

void loop() {
  NetworkClient client = server.accept();  // listen for incoming clients

  if (client) {                     // if you get a client,
    Serial.println("New Client.");  // print a message out the serial port
    String currentLine = "";        // make a String to hold incoming data from the client
    while (client.connected()) {    // loop while the client's connected
      if (client.available()) {     // if there's bytes to read from the client,
        char c = client.read();     // read a byte, then
        Serial.write(c);            // print it out the serial monitor
        if (c == '\n') {            // if the byte is a newline character

          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // the content of the HTTP response follows the header:
            client.print("Click <a href=\"/H\">here</a> to turn ON the LED.<br>");
            client.print("Click <a href=\"/L\">here</a> to turn OFF the LED.<br>");

            // The HTTP response ends with another blank line:
            client.println();
            // break out of the while loop:
            break;
          } else {  // if you got a newline, then clear currentLine:
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }

        // Check to see if the client request was "GET /H" or "GET /L":
        if (currentLine.endsWith("GET /H")) {
          digitalWrite(LED_BUILTIN, HIGH);  // GET /H turns the LED on
        }
        if (currentLine.endsWith("GET /L")) {
          digitalWrite(LED_BUILTIN, LOW);  // GET /L turns the LED off
        }
      }
    }
    // close the connection:
    client.stop();
    Serial.println("Client Disconnected.");
  }
}
```

### ESP32 WiFi example to Webpage with Interactive Buttons with LLM

The above example allows you to go to different webpages to change the onboard LED or an LED on pin 2. It would be more convenient to have a webpage with on and off buttons, or even a slider for a servo. By using an LLM, the example sketch, and some plain language prompts, we can achieve an interactive physical computing webserver on an ESP32 in minutes.

#### Example WiFi LED Buttons Prompt

Include all of the code from the WiFiAccessPoint example above with one of these prompts or make your own.

- _"Adapt the included code to serve a webpage with buttons that turn the LED on and off. Include buttons for 3 LEDs and also a Button that turns all LEDs on, and a Button that turns all LEDs off. Also include a random button that will blink all of the LEDs at random intervals."_

Which produces the code below:

```C
/*
  WiFiAccessPoint.ino creates a WiFi access point and provides a web server on it.

  Steps:
  1. Connect to the access point "yourAp"
  2. Point your web browser to http://192.168.4.1/
  3. Click on buttons to control LEDs


  Originally Created for arduino-esp32 on 04 July, 2018
  by Elochukwu Ifediora (fedy0)

  Modified to include Servo control and webpage on 2023-10-27
  by Gemini 2.0 Experimental Model
*/

#include <WiFi.h>
#include <NetworkClient.h>
#include <WiFiAP.h>

// Define GPIO pins for LEDs
#define LED_PIN_1 2   // Built-in LED on most ESP32 boards
#define LED_PIN_2 4
#define LED_PIN_3 5

// Set these to your desired credentials.
const char *ssid = "yourAP";
const char *password = "yourPassword";

NetworkServer server(80);

void setup() {
  pinMode(LED_PIN_1, OUTPUT);
  pinMode(LED_PIN_2, OUTPUT);
  pinMode(LED_PIN_3, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println("Configuring access point...");

  // You can remove the password parameter if you want the AP to be open.
  // a valid password must have more than 7 characters
  if (!WiFi.softAP(ssid, password)) {
    log_e("Soft AP creation failed.");
    while (1);
  }
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(myIP);
  server.begin();

  Serial.println("Server started");
}

void loop() {
  NetworkClient client = server.accept();  // listen for incoming clients

  if (client) {                     // if you get a client,
    Serial.println("New Client.");  // print a message out the serial port
    String currentLine = "";        // make a String to hold incoming data from the client
    while (client.connected()) {    // loop while the client's connected
      if (client.available()) {     // if there's bytes to read from the client,
        char c = client.read();     // read a byte, then
        Serial.write(c);            // print it out the serial monitor
        if (c == '\n') {            // if the byte is a newline character

          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println("Connection: close");  // Tell the client to close the connection after the transaction is complete
            client.println();

            // the content of the HTTP response follows the header:
            client.println("<!DOCTYPE html><html>");
            client.println("<head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
            client.println("<style>html { font-family: Helvetica; display: inline-block; margin: 0px auto; text-align: center;}");
            client.println(".button { background-color: #4CAF50; border: none; color: white; padding: 16px 40px;");
            client.println("text-decoration: none; font-size: 30px; margin: 2px; cursor: pointer;}");
            client.println(".button2 {background-color: #555555;}</style></head>");
            client.println("<body><h1>ESP32 Web Server</h1>");
            client.println("<p>LED 1</p>");
            client.println("<p><a href=\"/LED1_ON\"><button class=\"button\">ON</button></a>");
            client.println("<a href=\"/LED1_OFF\"><button class=\"button button2\">OFF</button></a></p>");
            client.println("<p>LED 2</p>");
            client.println("<p><a href=\"/LED2_ON\"><button class=\"button\">ON</button></a>");
            client.println("<a href=\"/LED2_OFF\"><button class=\"button button2\">OFF</button></a></p>");
            client.println("<p>LED 3</p>");
            client.println("<p><a href=\"/LED3_ON\"><button class=\"button\">ON</button></a>");
            client.println("<a href=\"/LED3_OFF\"><button class=\"button button2\">OFF</button></a></p>");
            client.println("<p>ALL LEDs</p>");
            client.println("<p><a href=\"/ALL_ON\"><button class=\"button\">ON</button></a>");
            client.println("<a href=\"/ALL_OFF\"><button class=\"button button2\">OFF</button></a></p>");
            client.println("<p><a href=\"/RANDOM\"><button class=\"button\">RANDOM</button></a></p>");
            client.println("</body></html>");

            // The HTTP response ends with another blank line:
            client.println();
            // break out of the while loop:
            break;
          } else {  // if you got a newline, then clear currentLine:
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }

        // Check to see if the client request was "GET /..."
        if (currentLine.endsWith("GET /LED1_ON")) {
          digitalWrite(LED_PIN_1, HIGH);
        }
        if (currentLine.endsWith("GET /LED1_OFF")) {
          digitalWrite(LED_PIN_1, LOW);
        }
        if (currentLine.endsWith("GET /LED2_ON")) {
          digitalWrite(LED_PIN_2, HIGH);
        }
        if (currentLine.endsWith("GET /LED2_OFF")) {
          digitalWrite(LED_PIN_2, LOW);
        }
        if (currentLine.endsWith("GET /LED3_ON")) {
          digitalWrite(LED_PIN_3, HIGH);
        }
        if (currentLine.endsWith("GET /LED3_OFF")) {
          digitalWrite(LED_PIN_3, LOW);
        }
        if (currentLine.endsWith("GET /ALL_ON")) {
          digitalWrite(LED_PIN_1, HIGH);
          digitalWrite(LED_PIN_2, HIGH);
          digitalWrite(LED_PIN_3, HIGH);
        }
        if (currentLine.endsWith("GET /ALL_OFF")) {
          digitalWrite(LED_PIN_1, LOW);
          digitalWrite(LED_PIN_2, LOW);
          digitalWrite(LED_PIN_3, LOW);
        }
        if (currentLine.endsWith("GET /RANDOM")) {
            randomLED();
        }
      }
    }
    // close the connection:
    client.stop();
    Serial.println("Client Disconnected.");
  }
}

void randomLED() {
    for (int i=0; i<15; i++){
        digitalWrite(LED_PIN_1, random(0, 2));
        digitalWrite(LED_PIN_2, random(0, 2));
        digitalWrite(LED_PIN_3, random(0, 2));
        delay(random(50, 300));
    }
    digitalWrite(LED_PIN_1, LOW);
    digitalWrite(LED_PIN_2, LOW);
    digitalWrite(LED_PIN_3, LOW);
}
```
