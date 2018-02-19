# Electro Sounds: Fundamentals

This document briefly describes fundamental coding concepts. All examples and assignments are based on one or more of these concepts. It is essential that students understand, practice and internalise these concepts. Code snippets and examples given in the following are written in JavaScript.


## Variables
Variables are the backbone of many computer programs. In computer programming, a variable is a location and a symbolic name containing a value. This means that information can be stored in a variable, which can be accessed at other points in the program.

``` javascript
let symbolicName = value;
```

``` javascript
let a = 10; // declare a variable
a = 11; // change the value of a variable
```

variables in javascript are prefixed with _var_, _let_ or _const_ when declared, you can read up on the different use cases here [^1], [^2]. Preferably _let_ and _const_ are used over _var_ however a JavaScript ES6 or higher implementation is required (which is the case for most latest modern browsers).

A variable can be of global or local scope. A global variable is a variable declared in the main body of your code, outside all functions or objects. A local variable is limited in scope to the function, block, statement or expression on which it is used.

Variables declared by _let_ or _const_ have as their scope the block in which they are defined, as well as in any contained sub-blocks. In this way, _let_ and _const_ work very much like _var_. (The main difference is that the scope of a _var_ variable is the entire enclosing function. [^3])

``` javascript
// global scope
let global = 0;

function fn() {
  global = 1;
}

console.log(global); // prints 1
```

``` javascript
// local scope
function fn() {
  let local = 0;
  local = 1;
  console.log(local); // prints 1
}

console.log(local); // error, local is not defined
```

``` javascript
// constant, value can't be changed after declaration
function fn() {
  const c = 0;
  c = 1; // error, not allowed
  console.log(c);
}
```

``` javascript
// local before global
let i = 0;
function fn() {
  for(let i=0;i<10;i++) {
		// assigns 0 to 9 to local variable i
		// then prints i
    console.log(i);
  }
}
```

## Assignments
To "assign" a variable means to symbolically associate a specific piece of information with a name. Any operations that are applied to this "name" (or variable) must hold true for any possible values. The assignment operator is the equals sign which should never be used for equality, which is the double equals sign. [link](https://www.cs.utah.edu/~germain/PPS/Topics/assignment_statement.html)

```JavaScript
let a = 1;
a = 2;
console.log("value of a is", a);
```

When working with numbers, the following syntax can be use.

```JavaScript
// we assume a is a number and we add 1 to it.
a = a + 1;
```
instead you can also use the following syntax

```JavaScript
a += 2; // addition: is the equivalent to a = a + 2
a -= 2; // subtraction: is the equivalent to a = a - 2
a *= 2; // multiplication: is the equivalent to a = a * 2
a /= 2; // division: is the equivalent to a = a / 2
```

## Functions

A function in programming is a block of code that performs some operation and may or may not return a value. Functions have inputs and outputs. An output is present when the function returns a value. Inputs are called arguments or parameters, they are used to pass external values to a function.

In the first example a function is defined, this functions has not inputs nor outputs, when called (invoked), the function will perform a task, it will print Hello World into the console.

```JavaScript
function fn() {
  console.log("Hello World.");
}
// calling function fn() will
// print Hello World into the console.
fn();
```

Next, we define a function with 2 input arguments: theArg1 and theArg2, for the function to perform its task (adding both arguments together), we expect the arguments to be numbers.

```JavaScript
function add(theArg1, theArg2) {
  let result = theArg1 + theArg2;
  console.log(result);
}
add(2,3);
```

```JavaScript
function add(theArg1, theArg2) {
  let result = theArg1 + theArg2;
  return result;
}
let val = add(2,3);
console.log(val);
```

## Conditional Statements

Conditional statements give you the ability to control the flow of your program, letting it make decisions on what code to execute. The if statement allows you to control if a program enters a section of code or not based on whether a given condition is true or false. One of the important functions of the if statement is that it allows the program to select an action based upon the user's input. For example, by using an if statement to check a user-entered password, your program can decide whether a user is allowed access to the program. [link](https://www.cprogramming.com/tutorial/c/lesson2.html)

### if

```JavaScript
var n = 0;
if(n == 0) {
  console.log('condition is true');
}
```

### if-else

```JavaScript
var n = 1;
if(n == 0) {
  console.log('condition is true');
} else {
  console.log('condition is false');
}
```

### if-else if-else

### AND OR

### Operators

```JavaScript
>     greater than              5 > 4 is TRUE
<     less than                 4 < 5 is TRUE
>=    greater than or equal     4 >= 4 is TRUE
<=    less than or equal        3 <= 4 is TRUE
==    equal to                  5 == 5 is TRUE
!=    not equal to              5 != 4 is TRUE
```


## Loops

### Nested Loops

### Nested Loops

## Arrays

find more details about arrays at [mozilla-ref-reference: array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

``` javascript
let arr = []; // an empty array
arr.push(1); // add 1 to the array
arr.push(2); // add 2 to the array
console.log(arr) // prints [1,2]
```

``` javascript
let arr = []; // an empty array

// populates array arr with values for each eleme
for(int i=0;i<10;i++) {
  arr.push(i);
}
console.log('this array contains ',arr.length, 'elements');
// prints this array contains 10 elements
```

### Associative Arrays


## Javascript in general

## Where can I find more information to read up on Javascript and p5js

__Javascript__ is probably the most prominent and widely used programming language to date, thus you will be able to find at least one answer to any of your questions and problems related to Javascript. However these answers will vary in detail and accuracy (and time). When looking for an answer do not take the first find in a google search as the right or most appropriate answer.

Often you will be pointed to threads on __[Stackoverflow](https://stackoverflow.com/tour)__ a question and answer site for professional and enthusiast programmers. Again, be vigilant and read through the question and all the answers given, the most up-voted answer might not be the answer you are looking for to solve your problem.

__[Mozilla](https://developer.mozilla.org/en-US/)__ provides a very comprehensive Javascript documentation . Learn about html, css, http, javascript, web APIs, browser graphics, audio, video and more from the [Learn web development](https://developer.mozilla.org/en-US/docs/Learn) or [Web technologies for developers](https://developer.mozilla.org/en-US/docs/Web) and specifically the [Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) pages.


__[p5js]()__ the [reference](https://p5js.org/reference/) and [examples](https://p5js.org/examples/) page on the p5js website is a very good starting point to familiarise yourself with this library. This requires you to invest time, actively practice and repeatedly write code. There is simply no way around this!

## JSON, Javascript Object Notation

## Git and Github

## Markdown

## Footnotes
[^1]: [javascript es6 var let or const](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)
[^2]: [var, let, or const?](https://hackernoon.com/js-var-let-or-const-67e51dbb716f)
[^3]: [mozilla: variables, scoping rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
