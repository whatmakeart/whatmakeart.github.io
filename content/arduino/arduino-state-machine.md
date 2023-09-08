---
title: Arduino State Machine
date: 2023-06-17T14:54:35
lastmod: 2023-09-07T20:33:46
---

## What is a State Machine?

A state machine is a series of "states" that a program can be in. Each of the states may have tasks and then wait for inputs or reasons to move to another state. It is like a report on the status of a system as it waits for a command to change or transition to other state. There can be Deterministic Finite State machines, where each state can only move to one other state, and Non-Deterministic Finite State Machines, where states can move to more than one state from a specific state.[^1]Beyond simple applications, state machines can become unwieldy as the number os states increases. A Unified Modeling Language (UML) State Machine allows for more complexity than a finite state machine without adding more states.[^2] A state machine is an ideal way to control and schedule an electronics project on an Arduino or other micro-controller.

## Sleep / Awake State Machine Example

A simple human sleeping vs being awake state machine might have two states, sleeping and awake. The inputs to change states could be hearing an alarm and getting tired.

**Awake State** - Am I tired? Yes, then go to sleep. No, then stay awake.
**Sleep State** - Did the Alarm go off? Yes, then wake up. No, then stay asleep.

## Traffic Light State Machine Example

Another example of a state machine could be a traffic light. If the state is traffic traveling on the north/south road with a green light, then you definitely want the east/west road to have a red light. The lights can't work on individual timers since that would allow them to sometimes both be green and then, crash. You could think about this traffic state machine as having two states, either traffic is going north and south or traffic is going east and west. But what about the transition between directions? Should there be a state for yellow lights? Should there be a state with all lights red for a short period before switching directions? As a sequence is analyzed more states and transitions become apparent.

Then we would have the following states:

- North/South Green and East/West Red State
- North/South Yellow and East/West Red State
- North/South Red and East/West Red Switch to East/West State
- North/South Red and East/West Green State
- North/South Red and East/West Yellow State
- North/South Red and East/West Red Switch to North/South State

This is only controlling the lights with timers. It is not taking into account turn lanes, or sensors that detect the presence of cars. That would create more states and more inputs. Using a state machine helps control a complex sequence by defining what happens during a state and the conditions for that state to change to another state. This can help with testing code since you can work on the code for one state at a time.

### Traffic Light Example State Machine Code

```C

// Traffic Light State Machine
// Traffic Light LED Pins

const unsigned char  northSouthRed = 12;
const unsigned char  northSouthYellow = 11;
const unsigned char  northSouthGreen = 10;

const unsigned char  eastWestRed = 9;
const unsigned char  eastWestYellow = 8;
const unsigned char eastWestGreen = 7;

enum states {
  Start_All_Red,        // start with all red
  NS_Green_EW_Red,      // North South Green and East West Red
  NS_Yellow_EW_Red,     // North South Yellow and East West Red
  NS_to_EW_Transition,  // Everything Red during transition
  NS_Red_EW_Green,      // North South Red and East West Green
  NS_Red_EW_Yellow,     // North South Red and East West Yellow
  EW_to_NS_Transition,  // Everything Red during transition
};

enum states trafficState;

unsigned long currentMillis;  // keeps track of current time in Milliseconds
unsigned long startTimer;     // tracks last time startTimer expired
unsigned long trafficTimer;   // tracks last time trafficTimer

const unsigned char  LEDPinArray[] = { northSouthRed,
                             northSouthYellow,
                             northSouthGreen,
                             eastWestRed,
                             eastWestYellow,
                             eastWestGreen };

const unsigned char  LED_NUMBER = sizeof(LEDPinArray);  // get the size of the array and store as variable

void setup() {
  // use a for loop to iterate through the array of LED pins
  for (int i = 0; i < LED_NUMBER; i++) {
    pinMode(LEDPinArray[i], OUTPUT);
  }

  startTimer = millis();  // sets the startup timer to the current time
}

void loop() {
  currentMillis = millis();  // set to current time in milliseconds

  switch (trafficState) {
    case Start_All_Red:

      changeTrafficLightLEDs(1, 0, 0, 1, 0, 0);

      if (checkTime(startTimer, 500UL)) {
        trafficTimer = currentMillis;    // start the trafficTimer
        trafficState = NS_Green_EW_Red;  // new state
      }
      break;

    case NS_Green_EW_Red:

      changeTrafficLightLEDs(0, 0, 1, 1, 0, 0);

      if (checkTime(trafficTimer, 5000UL)) {
        trafficState = NS_Yellow_EW_Red;  // new state
      }
      break;

    case NS_Yellow_EW_Red:

      changeTrafficLightLEDs(0, 1, 0, 1, 0, 0);

      if (checkTime(trafficTimer, 2000UL)) {
        trafficState = NS_to_EW_Transition;  // new state
      }
      break;

    case NS_to_EW_Transition:

      changeTrafficLightLEDs(1, 0, 0, 1, 0, 0);

      if (checkTime(trafficTimer, 1000UL)) {
        trafficState = NS_Red_EW_Green;  // new state
      }
      break;

    case NS_Red_EW_Green:

      changeTrafficLightLEDs(1, 0, 0, 0, 0, 1);

      if (checkTime(trafficTimer, 5000UL)) {
        trafficState = NS_Red_EW_Yellow;  // new state
      }
      break;

    case NS_Red_EW_Yellow:

      changeTrafficLightLEDs(1, 0, 0, 0, 1, 0);

      if (checkTime(trafficTimer, 2000UL)) {
        trafficState = EW_to_NS_Transition;  // new state
      }
      break;

    case EW_to_NS_Transition:

      changeTrafficLightLEDs(1, 0, 0, 1, 0, 0);

      if (checkTime(trafficTimer, 500UL)) {
        trafficState = NS_Green_EW_Red;  // new state
      }
      break;


  }  // end of switch

}  // end of loop

// BEGIN CheckTime()
boolean checkTime(unsigned long &lastTimerExpiredTime, unsigned long timerLength) {
  // is the time up for this task?
  if (currentMillis - lastTimerExpiredTime >= timerLength) {
    lastTimerExpiredTime += timerLength;  //get ready for the next iteration
    return true;
  }
  return false;
}
//END CheckTime()


void changeTrafficLightLEDs(unsigned char  NSR, unsigned char  NSY, unsigned char  NSG, unsigned char  EWR, unsigned char  EWY, unsigned char  EWG) {
  digitalWrite(northSouthRed, NSR);
  digitalWrite(northSouthYellow, NSY);
  digitalWrite(northSouthGreen, NSG);
  digitalWrite(eastWestRed, EWR);
  digitalWrite(eastWestYellow, EWY);
  digitalWrite(eastWestGreen, EWG);
}

```

## Example Traffic Light State Machine on TinkerCad

This is the above traffic light state machine using 6 LEDs on TinkerCad. Click the start simulation button to see the traffic lights turn on and off in the proper sequence based on the states in the state machine.

<div class="iframe-tinkercad-container">
<iframe class="responsiveIframe" width="725" height="453" src="https://www.tinkercad.com/embed/7bc8ETRwlql?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div>

## New Code Constructs

Up until now we have used `int` for number variables and `long` for big number variables. Additional variable types include, `char` for characters in ASCII, `byte` for small numbers, `float` for 32 bit decimal numbers. [^3]

### `enum`

The state machine code above uses an `enum` that allows the declaration of a new type of variable. Once the new type is declared then you can "enumerate" the values that are allowed in this type. Other values will not be allowed. You could create an `enum` of `fruit` and give is permissible values of `bannana, apple, grape, strawberry`. That just creates a new type of variable `fruit` that is like `int`. Then you could create a variable of the `fruit` type such as `enum fruit todaysFruit = grape;`. That creates a new variable `todaysFruit` with the value of `grape`.

## Arduino Multitasking Resources

[Simple Multitasking Arduino](https://www.forward.com.au/pfod/ArduinoProgramming/RealTimeArduino/index.html) by Matthew Ford

[How to code Timers and Delays in Arduino](https://www.forward.com.au/pfod/ArduinoProgramming/TimingDelaysInArduino.html) by Matthew Ford

## State Machine Resources

[State Machine with Structure Timer by Larry D](https://forum.arduino.cc/t/state-machine-and-timers-medium-level-tutorial/504662)

[State Machine Tutorial](http://www.thebox.myzen.co.uk/Tutorial/State_Machine.html)

[Fruit Basket State Machine](https://forum.arduino.cc/t/can-multiple-millis-be-used-for-independent-events-without-slowing-the-loop/291868/7) by Larry D

[^1]: https://developer.mozilla.org/en-US/docs/Glossary/State_machine [Web Archive](https://web.archive.org/web/20230113040311/https://developer.mozilla.org/en-US/docs/Glossary/State_machine)
[^2]: [UML State Machine - Wikipedia](https://en.wikipedia.org/wiki/UML_state_machine)
[^3]: [Arduino Reference](https://www.arduino.cc/reference/en/) [Web Archive](https://web.archive.org/web/20230209010601/https://www.arduino.cc/reference/en/)
