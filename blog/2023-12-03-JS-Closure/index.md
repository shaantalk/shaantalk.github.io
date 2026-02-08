---
slug: JavaScript Closure
title: JavaScript Closure
authors: shaantalk
tags: [blog, closure]
keywords:
  - JavaScript Closure
description: JavaScript Closure
---

## What is a closure ?

JavaScript closures are functions that can access values outside of their own curly braces.
<!-- truncate -->

In order to call a function in your code, the JavaScript interpreter needs to know about the function itself and any other data from the surrounding environment that it depends on. Everything needs to be neatly closed up into a box before it can be fed into the machine.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RdnSg76vlOQ?si=mWXMJo0Cd4fnwjrZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Take for example a pure function that only depends on its own arguments and internal data.

```js
function add(x, y) {
  return x + y;
}
```

What we have here is a fully self-contained closed expression. When it's called it gets pushed onto the call stack where it's executed and its internal data is only kept in memory until it's popped back off the call stack.

But what if that function references data outside of its own scope like from the global environment or an outer function ? That leaves us with an open expression that references other free variables throughout the environment.

```js
function outerFunction() {
  let outerVariable = 10;

  function innerFunction(x) {
    return x + outerVariable;
  }
  return innerFunction;
}

// Create a closure by assigning the inner function to a variable
let closure = outerFunction();

// Now, the closure can access the outerVariable
// even though it's no longer directly in the scope
let result = closure(5); // This will be 15 (5 + 10)
```

Now in order for the interpreter to call this function and also know the value of these free variables, it creates a closure to store them in a place in memory where they can be accessed later. That area of memory is called the heap. And unlike the call stack which is short-lived, heap can keep data in memory indefinitely then decide when it needs to get rid of it later with the garbage collector

So a closure is not just a function it's a function combined with its outer state or lexical environment.

We can create a closure by defining an outer function that contains the state, then an inner function that operates on it. The data contained here will not leak out to the surrounding environment. The inner function has access to data defined in the outer function scope but the outer function does not have access to the inner function.

In addition many javascript apis are callback based and you can use closures to create a function factory that takes an argument then returns a brand new function which can then be passed along to other functions that expect a callback.

## Example

Let's take a look at one of the most famous javascript trick questions

what does this code log out.

```js

// Famous JavaScript trick question
for (var i = 0; i < 3; i++) {
  function log() {
    console.log(i);
  }
  setTimeout(log, 100);
}`
```

let's go through it line by line first we're declaring a variable i with the var keyword. Then a for loop that will run three times by incrementing that variable. Now inside the for loop is where closures come into play. We define a function log that console logs the global variable i

This is not a pure function because it depends on a variable outside of its scope, therefore creating a closure. Then from there we set up a timeout and pass the log function as the callback.

This queues up a task to execute the log function after 100 milliseconds

So what do you think the output of this code will be ?

We're capturing the i variable in the closure for each iteration of the loop so it would seem like it should log out as 0 1 2.

But if we log it out it actually console logs 3 three times

## The Var vs. Let Dilemma

To understand why that happens we also need to understand the difference between var and let. When you use var in a for loop that variable actually gets hoisted up into the parent scope which in this case would be the global scope.

Watch what happens when we change the variable to let we get our original expectation of a console log of 0 1 2.

With var we have a global variable that we're mutating over and over again but with let we're creating a variable that is scoped to the for loop.

In other words it's local to the for loop and can't be accessed outside of it.

```js
// Fixing the issue with let
for (let i = 0; i < 3; i++) {
  function log() {
    console.log(i);
  }
  setTimeout(log, 100);
}
```

Now remember

A closure is the combination of a function and its lexical environment. In the case of let the closure is capturing the log function along with the variable i for each iteration of the loop which would be 0 1 2.

if we didn't have a closure here javascript would allocate that i variable in memory in the call stack and then immediately release it but because we do have a closure it stores that variable in the heap memory so it can be referenced again when that closure is called by the timeout in the future.

But when var is used it's capturing the reference to the global variable. The reason it logs three three times is because the timeout doesn't run until 100 milliseconds later, which is long after that for loop has completed and iterated up to three.

## Unveiling the Magic

We can actually examine this behaviour in the browser dev tools by adding a debugger to the closure. if you try to run this code in the browser with the devtools open. it will take you to the sources tab and allow you to inspect the call stack and scope of the function. When let is used you can see we have a block scoped variable named i but when var is used that variable is now in the global scope which changes the way it's captured by the closure

## Bonus Content

Now that we are done with closure. Lets also check few different solutions to get 0 1 2 from the previous question.

In the first solution which we already discussed we have used let, instead of var to achieve this.

### Solution 1: Use `let` instead of `var`

```js
for (let i = 0; i < 3; i++) {
  function log() {
    console.log(i);
  }

  setTimeout(log, 100);
}
```

Using `let` creates a block-scoped variable, so each iteration of the loop gets its own variable `i`, and the closure inside `setTimeout` captures the correct value.

### Solution 2: Pass the value of `i` as a parameter to `setTimeout`

```js
for (var i = 0; i < 3; i++) {
  function log(index) {
    console.log(index);
  }

  setTimeout(log, 100, i);
}
```

By passing `i` as a parameter to the `log` function inside `setTimeout`, you are creating a separate copy of `i` for each invocation of `log`, preventing the closure issue.

### Solution 3: Use an IIFE (Immediately Invoked Function Expression)

```js
for (var i = 0; i < 3; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(index);
    }, 100);
  })(i);
}
```

An IIFE creates a new scope for each iteration of the loop, allowing you to capture the correct value of `i` inside the closure.

### Solution 4: Use `bind` to set the context and pass parameters

```js
for (var i = 0; i < 3; i++) {
  function log(index) {
    console.log(index);
  }

  setTimeout(log.bind(null, i), 100);
}
```

The `bind` method allows you to set the context (`null` in this case) and also pass parameters to the function. This way, you can ensure that the correct value of `i` is passed to the `log` function.

Each of these solutions addresses the closure issue and ensures that the correct value of `i` is logged in the `setTimeout` callback i.e. 0 1 2
