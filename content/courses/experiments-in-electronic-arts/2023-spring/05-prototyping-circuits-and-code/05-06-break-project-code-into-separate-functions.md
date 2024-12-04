---
title: 05.06 Break Project Code into Separate Functions
date: 2023-02-17T09:30:00Z
lastmod: 2024-12-04T06:11:27
---

## Assignment Deliverables

1. Upload an Arduino .ino sketch file with:
   1. `setup();` function with a `serialBegin(9600);` and a a `serialPrint("Your Program Name is Starting");` to indicate the sketch is on the Arduino.
   2. `loop();` function with all of your named function calls listed.
   3. After the loop, function delcarations `void mySuperFunction() { }` make sure to include `void` and the `{ }` curly braces.

## Assignment Overview

Now that you wrote a "Prototype Triangle", you have most of the information you need to separate your code into functions. Most if not all of these functions will not exist yet. You also will likely not have any code in the functions yet. That is ok.

The first step is to translate the software components from your Prototype Triangle into function names. Then you will list them in order of operation in the `loop();`. Some functions may be listed more than once. Then after the loop's lat `}` you declare each of the functions.

**Note:** It is common practice to write function names starting with a lowercase letter and then continuing with "camel case" or capitalizing the first letter of each word. For Example "commonPracticeToWriteFunctionNames" is written in camel case.

## Process

Let's continue to use the toaster example. In the toaster Prototype Triangle software list, we have the following:

- Check if toast is inserted and lever is pressed down
- Check if toaster knob is set to light or dark
- Set timer based on the toast setting
- If time is set, then turn on the toaster heater
- If heater is on, then turn on LED
- Check if the timer is finished
- If timer is finished, then turn off the toaster heater
- If heater is off, then turn of LED
- If the heating element and the timer are finished, then pop up the toast
- Standby mode waiting for a new piece of toast

If we look at the first one we can change that to a function so "Check if toast is inserted and lever is pressed down" becomes `checkIfToastInserted();` and that gets written into the loop:

```C
loop() {
   `checkIfToastInserted(); ` ;
}
```

Then it needs to be declared after the last `}` curly brace of the loop. To declare a function, start with `void` then the `nameOfTheFunction` then two `()` and finally two `{}` curly braces. This function declaration looks like this:

```C
void checkIfToastInserted() {
// no code in the function yet
}

```

## Example Program for the Toaster

Below is an example program for the Toaster example. Your functions will be different but they should have descriptive names, be listed in the `loop();` and be declared after the `loop();`

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
  turnOnLED();              // If heater is on, then turn on LED
  checkTimer();             // checks if the timer is finished
  turnOffHeatingElement();  // if timer is finished, then turn off the toaster heater
  turnOffLED();             //If heater is off, then turn off LED
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

void turnOnLED() {
  // empty function placeholder
}

void checkTimer() {
  // empty function placeholder
}

void turnOffHeatingElement() {
  // empty function placeholder
}

void turnOffLED() {
  // empty function placeholder
}

void popUpToast() {
  // empty function placeholder
}

void waitForNewToast() {
  // empty function placeholder
}

```
