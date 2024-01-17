"use strict";(self.webpackChunksantanu_dev=self.webpackChunksantanu_dev||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"JavaScript Closure","metadata":{"permalink":"/blog/JavaScript Closure","source":"@site/blog/2023-12-03-JS-Closure/index.md","title":"JavaScript Closure","description":"JavaScript Closure","date":"2023-12-03T00:00:00.000Z","formattedDate":"December 3, 2023","tags":[{"label":"blog","permalink":"/blog/tags/blog"},{"label":"closure","permalink":"/blog/tags/closure"}],"readingTime":6.71,"hasTruncateMarker":false,"authors":[{"name":"Santanu Panda","title":"Cloud Engineer @ Cisco","url":"https://github.com/shaantalk","imageURL":"img/santanu.jpg","key":"shaantalk"}],"frontMatter":{"slug":"JavaScript Closure","title":"JavaScript Closure","authors":"shaantalk","tags":["blog","closure"],"keywords":["JavaScript Closure"],"description":"JavaScript Closure"},"unlisted":false},"content":"## What is a closure ?\\n\\nJavaScript closures are functions that can access values outside of their own curly braces.\\n\\nIn order to call a function in your code, the JavaScript interpreter needs to know about the function itself and any other data from the surrounding environment that it depends on. Everything needs to be neatly closed up into a box before it can be fed into the machine.\\n\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/RdnSg76vlOQ?si=mWXMJo0Cd4fnwjrZ\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n\\nTake for example a pure function that only depends on its own arguments and internal data.\\n\\n```js\\nfunction add(x, y) {\\n  return x + y;\\n}\\n```\\n\\nWhat we have here is a fully self-contained closed expression. When it\'s called it gets pushed onto the call stack where it\'s executed and its internal data is only kept in memory until it\'s popped back off the call stack.\\n\\nBut what if that function references data outside of its own scope like from the global environment or an outer function ? That leaves us with an open expression that references other free variables throughout the environment.\\n\\n```js\\nfunction outerFunction() {\\n  let outerVariable = 10;\\n\\n  function innerFunction(x) {\\n    return x + outerVariable;\\n  }\\n  return innerFunction;\\n}\\n\\n// Create a closure by assigning the inner function to a variable\\nlet closure = outerFunction();\\n\\n// Now, the closure can access the outerVariable\\n// even though it\'s no longer directly in the scope\\nlet result = closure(5); // This will be 15 (5 + 10)\\n```\\n\\nNow in order for the interpreter to call this function and also know the value of these free variables, it creates a closure to store them in a place in memory where they can be accessed later. That area of memory is called the heap. And unlike the call stack which is short-lived, heap can keep data in memory indefinitely then decide when it needs to get rid of it later with the garbage collector\\n\\nSo a closure is not just a function it\'s a function combined with its outer state or lexical environment.\\n\\nWe can create a closure by defining an outer function that contains the state, then an inner function that operates on it. The data contained here will not leak out to the surrounding environment. The inner function has access to data defined in the outer function scope but the outer function does not have access to the inner function.\\n\\nIn addition many javascript apis are callback based and you can use closures to create a function factory that takes an argument then returns a brand new function which can then be passed along to other functions that expect a callback.\\n\\n## Example\\n\\nLet\'s take a look at one of the most famous javascript trick questions\\n\\nwhat does this code log out.\\n\\n```js\\n\\n// Famous JavaScript trick question\\nfor (var i = 0; i < 3; i++) {\\n  function log() {\\n    console.log(i);\\n  }\\n  setTimeout(log, 100);\\n}`\\n```\\n\\nlet\'s go through it line by line first we\'re declaring a variable i with the var keyword. Then a for loop that will run three times by incrementing that variable. Now inside the for loop is where closures come into play. We define a function log that console logs the global variable i\\n\\nThis is not a pure function because it depends on a variable outside of its scope, therefore creating a closure. Then from there we set up a timeout and pass the log function as the callback.\\n\\nThis queues up a task to execute the log function after 100 milliseconds\\n\\nSo what do you think the output of this code will be ?\\n\\nWe\'re capturing the i variable in the closure for each iteration of the loop so it would seem like it should log out as 0 1 2.\\n\\nBut if we log it out it actually console logs 3 three times\\n\\n## The Var vs. Let Dilemma\\n\\nTo understand why that happens we also need to understand the difference between var and let. When you use var in a for loop that variable actually gets hoisted up into the parent scope which in this case would be the global scope.\\n\\nWatch what happens when we change the variable to let we get our original expectation of a console log of 0 1 2.\\n\\nWith var we have a global variable that we\'re mutating over and over again but with let we\'re creating a variable that is scoped to the for loop.\\n\\nIn other words it\'s local to the for loop and can\'t be accessed outside of it.\\n\\n```js\\n// Fixing the issue with let\\nfor (let i = 0; i < 3; i++) {\\n  function log() {\\n    console.log(i);\\n  }\\n  setTimeout(log, 100);\\n}\\n```\\n\\nNow remember\\n\\nA closure is the combination of a function and its lexical environment. In the case of let the closure is capturing the log function along with the variable i for each iteration of the loop which would be 0 1 2.\\n\\nif we didn\'t have a closure here javascript would allocate that i variable in memory in the call stack and then immediately release it but because we do have a closure it stores that variable in the heap memory so it can be referenced again when that closure is called by the timeout in the future.\\n\\nBut when var is used it\'s capturing the reference to the global variable. The reason it logs three three times is because the timeout doesn\'t run until 100 milliseconds later, which is long after that for loop has completed and iterated up to three.\\n\\n## Unveiling the Magic\\n\\nWe can actually examine this behaviour in the browser dev tools by adding a debugger to the closure. if you try to run this code in the browser with the devtools open. it will take you to the sources tab and allow you to inspect the call stack and scope of the function. When let is used you can see we have a block scoped variable named i but when var is used that variable is now in the global scope which changes the way it\'s captured by the closure\\n\\n## Bonus Content\\n\\nNow that we are done with closure. Lets also check few different solutions to get 0 1 2 from the previous question.\\n\\nIn the first solution which we already discussed we have used let, instead of var to achieve this.\\n\\n### Solution 1: Use `let` instead of `var`\\n\\n```js\\nfor (let i = 0; i < 3; i++) {\\n  function log() {\\n    console.log(i);\\n  }\\n\\n  setTimeout(log, 100);\\n}\\n```\\n\\nUsing `let` creates a block-scoped variable, so each iteration of the loop gets its own variable `i`, and the closure inside `setTimeout` captures the correct value.\\n\\n### Solution 2: Pass the value of `i` as a parameter to `setTimeout`\\n\\n```js\\nfor (var i = 0; i < 3; i++) {\\n  function log(index) {\\n    console.log(index);\\n  }\\n\\n  setTimeout(log, 100, i);\\n}\\n```\\n\\nBy passing `i` as a parameter to the `log` function inside `setTimeout`, you are creating a separate copy of `i` for each invocation of `log`, preventing the closure issue.\\n\\n### Solution 3: Use an IIFE (Immediately Invoked Function Expression)\\n\\n```js\\nfor (var i = 0; i < 3; i++) {\\n  (function (index) {\\n    setTimeout(function () {\\n      console.log(index);\\n    }, 100);\\n  })(i);\\n}\\n```\\n\\nAn IIFE creates a new scope for each iteration of the loop, allowing you to capture the correct value of `i` inside the closure.\\n\\n### Solution 4: Use `bind` to set the context and pass parameters\\n\\n```js\\nfor (var i = 0; i < 3; i++) {\\n  function log(index) {\\n    console.log(index);\\n  }\\n\\n  setTimeout(log.bind(null, i), 100);\\n}\\n```\\n\\nThe `bind` method allows you to set the context (`null` in this case) and also pass parameters to the function. This way, you can ensure that the correct value of `i` is passed to the `log` function.\\n\\nEach of these solutions addresses the closure issue and ensures that the correct value of `i` is logged in the `setTimeout` callback i.e. 0 1 2"}]}')}}]);