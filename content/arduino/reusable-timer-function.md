---
title: Reusable Timer Function
date: 2023-06-17T14:53:17
lastmod: 2023-09-07T20:34:26
tags:
  - Arduino
---

The timer function below [^1] is from [Arduino Forum](https://forum.arduino.cc/) user, [Larry D](https://forum.arduino.cc/u/larryd). Other examples on the forums that expand this function into a [timer structure](https://forum.arduino.cc/t/millis-made-easier/378322/7), adapting the Blink Without Delay Example into [four different timer methods](https://forum.arduino.cc/t/millis-made-easier/378322/5), and a full [timer library](https://forum.arduino.cc/t/best-timer-library/944347/7).

This `boolean` function returns `true` or `false` depending if the timer is up or not. Using this function can simplify your code by not having the full `if` conditional in your various functions. It also uses a "reference" to automatically update the `lastMillis` variable. You need to declare a time keeping variable for each timer in your program, but by passing the time keeper variable to the function, it updates its value automatically by using a reference. That is the `&` in front of the variable in the function declaration.

## What is Passing a Parameter to a Function?

You have already passed parameters to functions. In the `setup();` function, we often use `pinMode();`. In the very first sketch in this course "Blink" it has `pinMode(LED_BUILTIN, OUTPUT);` in the `setup();` The `LED_BUILTIN` and `OUTPUT` are both parameters passed to the `pinMode();` function. Parameters are separated by commas. That is using the function with parameters.

When you declare a function that you want to use parameters with, you need to declare the type of variable the parameters will use. In the `checkTime();` function the two parameters `&lastTimerExpiredTime` and `timerLength` are declared as `unsigned long` variables. This also means that this function takes two parameters and will throw an error if you try to send just one parameter or three parameters.

## `checkTime();` Reusable Timer Function

```C
// variable names modified from original  by Larry D for clarity
// timerLength is how long the timer is in Milliseconds
// lastTimerExpiredTime is the time in Milliseconds of the last time the timer expired

// BEGIN CheckTime()
boolean checkTime(unsigned long &lastTimerExpiredTime, unsigned long timerLength)
{
  // is the time up for this task?
  if (currentMillis - lastTimerExpiredTime >= timerLength)
  {
    lastTimerExpiredTime += timerLength;  //get ready for the next iteration
    return true;
  }
  return false;
}
//END CheckTime()
```

## How to Use the Timer Function

For each timer that you want to use, you need to create an `unsigned long` variable to keep track of the last time the timer expired. Using `unsigned long` variables keeps the interval the same even when the counter reaches the max amount of milliseconds and rolls back to 0 like the odometer on a car. Using `unsigned long` makes the number like a loop of paper instead of a piece of paper with a beginning and and end.

Therefore, before `setup();` declare your timer tracking variables. You can declare them individually or as a list. You can declare the length of the timers, the intervals, or you can specify the length of the timer directly when you use it. In the example below `timer1` and `timer2` have variables for their timer lengths / intervals, but `timer3` and `timerForExplosion` have their timer length coded in the `if` conditional directly.

```C
unsigned long timer1;
unsigned long timer2;
unsigned long timer3;
unsigned long timerForExplosion;

// or these can be declared as a list

unsigned long timer1, timer2, timer3, timerForExplosion;

unsigned long timer1Length = 1000; // 1 second timer
unsigned long timer2Length = 3000; // 3 second timer
```

Then when you want to use a timer to time an event you use an `if` conditional.

```C
// passes two parameters to the checkTime function and
// sees if the timer is up
if (checkTime(timer1, timer1Length)) {
  Serial.println("Timer 1 is up."); // if the timer is up it does the code here
}
```

### Full Example with 4 Timers

```C
// This code has 4 different timers.
// Two timers have declared values, while the other two timers have their values coded directly in their timer function call
// The timers have counters that keep track of how many times that each timer expired.
// This shows that each timer runs independent of the other timers.
// For more complex sequences or for timers that stop running, an enable flag and or a state machine are needed.

unsigned long currentMillis;      // keeps track of current time in Milliseconds
unsigned long timer1;             // tracks last time timer1 expired
unsigned long timer2;             // tracks last time timer2 expired
unsigned long timer3;             // tracks last time timer3 expired
unsigned long timerForExplosion;  // tracks last time timerForExplosion expired

unsigned long timer1Length = 1000;  // 1 second timer
unsigned long timer2Length = 3000;  // 3 second timer

int timer1Counter = 0; // Keeps track of the number of times timer 1 expired for example purposes
int timer2Counter = 0; // Keeps track of the number of times timer 2 expired for example purposes
int timer3Counter = 0; // Keeps track of the number of times timer 3 expired for example purposes
int timerForExplosionCounter = 0; // Keeps track of the number of times timer 1 expired for example purposes

void setup() {
  Serial.begin(9600);
  Serial.println("4 Timer Example Sketch Starting");
}

void loop() {
  currentMillis = millis(); // sets the current time in Milliseconds

  // passes two parameters to the checkTime function and
  // sees if the timer is up
  if (checkTime(timer1, timer1Length)) {
    timer1Counter++; // increments the timer1Counter
    Serial.print("Timer 1 expired count = ");  // if the timer is up it does the code here
    Serial.println(timer1Counter); // Print the value of the counter
  }

  if (checkTime(timer2, timer2Length)) {
    timer2Counter++; // increments the timer2Counter
    Serial.print("Timer 2 expired count = ");  // if the timer is up it does the code here
    Serial.println(timer2Counter); // Print the value of the counter
  }

  // passes the direct value of 5000 milliseconds for timer3 as an unsigned long, note the UL at the end of the number
  if (checkTime(timer3, 5000UL)) {
    timer3Counter++; // increments the timer3Counter
    Serial.print("Timer 3 expired count = ");  // if the timer is up it does the code here
    Serial.println(timer3Counter); // Print the value of the counter
  }

  // passes the direct value of 30000 milliseconds (30 seconds) for timerForExplosion as an unsigned long, note the UL at the end of the number
  if (checkTime(timerForExplosion, 30000UL)) {
        timer1Counter++; // increments the timerForExplosionCounter
    Serial.println("BOOOOOOOOM!");  // if the timer is up it does the code here
    Serial.print("Timer for explosion expired count = ");  // if the timer is up it does the code here
    Serial.println(timerForExplosionCounter); // Print the value of the counter
  }
}

// BEGIN CheckTime()
boolean checkTime(unsigned long &lastTimerExpiredTime, unsigned long timerLength)
{
  // is the time up for this task?
  if (currentMillis - lastTimerExpiredTime >= timerLength)
  {
    lastTimerExpiredTime += timerLength;  //get ready for the next iteration
    return true;
  }
  return false;
}
//END CheckTime()

```

[^1]:
    [Arduino Forum Post](https://forum.arduino.cc/t/help-with-passing-variable-to-a-function-and-updating-variable-value/395160/4) "
    Help with passing variable to a function and updating variable value" July 2016.
