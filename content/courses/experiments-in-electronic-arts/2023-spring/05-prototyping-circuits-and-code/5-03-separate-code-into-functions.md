---
title: "05.03 Prototype Code as Separate Functions"
date: 2020-01-26T23:11:13Z
draft: false
---

Breaking large complex projects into smaller manageable components is an efficient way to complete parts of a project along the way to completing the whole. The physical hardware might have obvious places to separate components, an LED could be separate from a motor, or a knob, or a button, or a sensor. Each of these needs to work but some can be built independently, tested, and then assembled into the whole. The same is true for software or code.

One way to break code into different components is with functions. Objects and classes should ultimately be used to make software components. breaking up the actions of the code into discrete functions that either do something or return (calculate) a value works well for simple and semi complex programs. By breaking each part of the code into a function, you can work on different parts individually. As you get a part working, it will keep working. Then you can work on the next part, get it working and eventually combine everything together for a complete program or sketch in the case of the Arduino.

Earlier we used the example of a toaster to break a project into components. Let's look at how that could work in code. For this example we will write function calls in the `loop();` and then outside or after the loop's last `}` we will declare all the functions. These functions will not return anything so they will be declared with `void`. The functions will be empty until each one is worked on individually.

## Example Toaster Code Separated into Functions

```C
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);                            // Begin the serial monitor at speed 9600
  Serial.print("Starting Tasty Toast Program");  // Send a message to indicate the sketch started
}

void loop() {
  // put your main code here, to run repeatedly:

  // These are the function calls. A function call has the function do its task
  // This is different from the function declarations below the loop();
  checkIfToastInserted();   // checks if toast is inserted and lever is pressed down
  checkToastSetting();      // checks if toaster is set to light or dark
  setTimer();               // Sets timer based on the toast setting
  turnOnHeatingElement();   // If time is set, then turn on the toaster heater
  checkTimer();             // checks if the timer is finished
  turnOffHeatingElement();  // if timer is finished, then turn off the toaster heater
  popUpToast();             // If the heating element and the timer are finished, then pop up the toast
  waitForNewToast();        // Standby mode waiting for a new piece of toast
}


// Below are the function declarations
// When decalaring a function, a type must be in front. In this case it is void
// since the functions do not return anything
void checkIfToastInserted() {
  // empty function placeholder
}

void checkToastSetting() {
  // empty function placeholder
}

void setTimer() {
  // empty function placeholder
}

void turnOnHeatingElement() {
  // empty function placeholder
}

void checkTimer() {
  // empty function placeholder
}

void turnOffHeatingElement() {
  // empty function placeholder
}

void popUpToast() {
  // empty function placeholder
}

void waitForNewToast() {
  // empty function placeholder
}

```
