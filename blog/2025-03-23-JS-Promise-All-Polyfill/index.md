---
slug: JavaScript Promise.All Polyfill
title: Custom Implementation of Promise.all in JavaScript
authors: shaantalk
tags: [Promise, All, Polyfill. Promise.All]
keywords:
  - JavaScript Promise.All Polyfill
description: JavaScript Promise.All Polyfill
---


# Custom Implementation of Promise.all in JavaScript

## Overview
`Promise.all` is a built-in JavaScript function that takes an array of Promises and resolves when all of them are fulfilled. If any Promise is rejected, it immediately rejects. Here, we implement our own version, `Promise.myAll`.

<!-- truncate -->

## Implementation
```javascript
Promise.myAll = (promises) => {
  let responses = [];
  let errorResp = [];
  return new Promise((resolve, reject) => {
    /** Loop over promises array **/
    promises.forEach(async (singlePromise, i) => {
      try {
        /** wait for resolving 1 promise **/
        let res = await singlePromise;
        responses.push(res);
        if (i == promises.length - 1) {
          if (errorResp.length > 0) {
            reject(errorResp);
          } else {
            resolve(responses)
          }
        }
      } catch (err) {
        errorResp.push(err);
        reject(err);
      }
    });
  });
};

let p1 = Promise.resolve("Promise1 resolved");

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved after 2 seconds");
  }, 1000);
});

let p3 = Promise.resolve("Promise3 resolved");

let p4 = Promise.reject("Promise4 reject");

Promise.myAll([p1, p2, p3]).then(
  (res) => {
    console.log("Response :", res);
  },
  (err) => {
    console.log("error :", err);
  }
);
```

## Explanation
1. **Handling Multiple Promises:**
   - The function loops through the array of Promises.
   - Each Promise is awaited before being added to `responses`.

2. **Error Handling:**
   - If any Promise fails, it gets pushed to `errorResp` and the `reject` function is called.

3. **Resolving the Promises:**
   - If all Promises resolve successfully, the function resolves with the array of results.
   - If any Promise rejects, it rejects immediately.

This implementation mimics `Promise.all` behavior but has a minor issue: it doesn’t wait for all Promises to finish before rejecting. This can be improved by tracking completion count. 🚀
