---
slug: JavaScript Synchronous setTimeout
title: How to setTimeout Synchronously in JavaScript
authors: shaantalk
tags: [Synchronous, setTimeout]
keywords:
  - JavaScript Synchronous setTimeout
description: JavaScript Synchronous setTimeout
---


# How to setTimeout Synchronously in JavaScript

## Overview
In JavaScript, `setTimeout` is an asynchronous function, meaning it does not block the execution of subsequent code. However, you can achieve a synchronous-like delay using Promises and the `async/await` pattern.

## Implementation
You can create a `sleep` function that returns a Promise, which resolves after the specified timeout:

```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

Then, use `await` inside an `async` function to pause execution until the Promise resolves:

```javascript
async function demo() {
  await sleep(5000);
  alert('This should be the second one');
}

demo();
```

## Explanation
1. The `sleep` function returns a Promise that resolves after `ms` milliseconds.
2. Inside the `demo` function, `await sleep(5000);` pauses execution for 5 seconds.
3. After the delay, the alert message is displayed.

Using `await` ensures that the execution flow appears synchronous, making the code more readable and manageable in asynchronous scenarios.
