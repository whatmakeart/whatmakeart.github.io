---
title: Arduino Code Memory Optimization
date: 2023-06-17T15:00:45
lastmod: 2023-09-07T20:33:12
---

When you compile a sketch in the Arduino IDE it prints out both the amount of Flash memory and Ram that the program uses as well as the percentage of overall Flash memory and RAM used. To avoid errors or problems, both of these numbers should be kept below their maximum values.

Storing variables takes memory, and on small micro-controllers like the Arduino, memory is a small finite resource. Storing a pin number as an `int` takes twice the space as storing it as a `byte`. This type of optimization may not seem like much but it can add up when getting down to the last remaining bytes of memory. Generally it is best practice to use larger variables and then optimize if needed. This is why most Arduino sketch examples use `int ledPin = 4` rather than `char ledPin = 4;`. Those variable declarations can be optimized later if needed but don't needlessly limit the range of a variable if the extra memory is not needed.

### Arduino Variable Sizes

<div class="responsive-table-markdown">

| Explicit Variable Name | Arduino Equivalent                            | Bits | Bytes | Min Value      | Max Value     |
| ---------------------- | --------------------------------------------- | ---- | ----- | -------------- | ------------- |
| boolean                | bool                                          | 8    | 1     | 0, false       | 1 , true      |
| int8_t                 | char                                          | 8    | 1     | -128           | 127           |
| uint8_t                | unsigned char                                 | 8    | 1     | 0              | 255           |
| Don't Use              | byte (Use unsigned char for code portability) | 8    | 1     | 0              | 255           |
| int16_t                | int                                           | 16   | 2     | -32,768        | +32,767       |
| uint16_t               | unsigned int                                  | 16   | 2     | 0              | 65,535        |
| Don't use              | word (Use unsigned int for code portability)  | 16   | 2     | 0              | 65,535        |
| int32_t                | long                                          | 32   | 4     | -2,147,483,648 | 2,147,483,647 |
| uint32_t               | unsigned long                                 | 32   | 4     | 0              | 4,294,967,295 |
| N/A                    | float                                         | 32   | 4     | -3.4028235E+38 | 3.4028235E+38 |
| N/A                    | double (same as float on some boards)         | 32   | 4     | -3.4028235E+38 | 3.4028235E+38 |

</div>

### `#define`

`#define` is a preprocessor macro that replaces all instances of what is defined in the code with that value. For example `#define PIN 3` would replace all instances of `PIN` in the code with 3. This is different than a variable since it is not stored in RAM. [^1] This just like a find and replace in a word processor or code editor. It can be vary convenient and powerful but it can also destroy a text if not used properly. `#define` is used in multiple Arduino example sketches but if you want the same RAM savings without the absolute text replacement then you can use `const` in front of the variable such as `const int ledPin = 4;` or `const char ledPin = 4;`.

## Don't Store Static Strings in RAM

`Serial.println("Program did the next step");` is great for debugging but really isn't necessary for having the code run. Either comment out the line with two `//` like `// Serial.println("Program did the next step");` or wrap the text in `F()` so it is stored in the flash memory rather than in the RAM. The full `Serial.println` stored in Flash memory is `Serial.println(F("Program did the next step but store this text in Flash to save RAM."));`

Long lists of strings and other text data can likely be stored in Progmem instead of RAM. Unless the information needs super speedy access, moving it to Flash memory can save on RAM. The Arduino Docs show some examples of storing arrays of strings in Progmem. [^2]

## Check for Unused Libraries and Unused Functions

As you work on a project, code has a tendency to stick around. You might try a new stepper motor library and include it at the top of your code. Maybe you find a different library and in your excitement you include it but don't remove the old library. You might also have functions and variables from the previous library still in the code. All of this takes memory space that is better used on your actual code. Regularly auditing your code for unnecessary parts is both a good way to better understand your code as well as make it more efficient.

## DRY Do Not Repeat Yourself

Anytime that you repeat code, or start adding numbers to the ends of variables in a list, you are repeating yourself and there is likely a better way to do it. Usually the better way runs faster, and uses less code and memory.

- Use arrays to define pin numbers and to assign a list of pins as `INPUT` or `OUTPUT`
- Use functions that receive parameters for repeatable actions
- Arrays can be passed to functions for more complex parameters
- Eliminate as much repetition in the code as possible

## Arduino Memory Optimization Resources

[Arduino Docs Memory Guide](https://docs.arduino.cc/learn/programming/memory-guide) - Includes many memory optimization tips ranging from the basic low hanging fruit to advanced techniques to squeeze out the last bits of memory.

[^1]: https://en.cppreference.com/w/cpp/preprocessor/replace
[^2]: [Progmemm Arduino Reference](https://www.arduino.cc/reference/en/language/variables/utilities/progmem/) [(Web Archive)](https://web.archive.org/web/20230218011159/https://www.arduino.cc/reference/en/language/variables/utilities/progmem/)
