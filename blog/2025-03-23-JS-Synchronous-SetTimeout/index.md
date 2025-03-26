---
slug: JavaScript Object Modifications
title: Understanding Object.preventExtensions, Object.seal, and Object.freeze in JavaScript
authors: shaantalk
tags: [preventExtensions, seal, freeze]
keywords:
  - JavaScript Object Modifications
description: JavaScript Object Modifications
---

# Understanding `Object.preventExtensions`, `Object.seal`, and `Object.freeze` in JavaScript

In JavaScript, objects are mutable by default, meaning properties can be added, modified, or deleted. However, there are ways to control an object's mutability using `Object.preventExtensions`, `Object.seal`, and `Object.freeze`. These methods help in different levels of restricting modifications to objects.

## Comparison Table

| Method                     | Prevent Adding Properties | Prevent Deleting Properties | Prevent Modifying Properties |
|----------------------------|--------------------------|----------------------------|------------------------------|
| `Object.preventExtensions` | ✅ Yes                   | ❌ No                       | ❌ No                        |
| `Object.seal`              | ✅ Yes                   | ✅ Yes                      | ❌ No                        |
| `Object.freeze`            | ✅ Yes                   | ✅ Yes                      | ✅ Yes                        |

---

## 1. `Object.preventExtensions(obj)`

- **Prevents new properties from being added**.
- **Existing properties can be modified or deleted**.
- Returns the same object.

```javascript
const obj = { name: "Alice" };
Object.preventExtensions(obj);

obj.age = 25; // ❌ Fails silently in non-strict mode, throws an error in strict mode
delete obj.name; // ✅ Allowed
obj.name = "Bob"; // ✅ Allowed (modification)
```

---

## 2. `Object.seal(obj)`

- **Prevents adding or deleting properties**.
- **Existing properties can still be modified**.
- Returns the same object.

```javascript
const obj = { name: "Alice" };
Object.seal(obj);

obj.age = 25; // ❌ Fails silently in non-strict mode, throws an error in strict mode
delete obj.name; // ❌ Not allowed
obj.name = "Bob"; // ✅ Allowed (modification)
```

---

## 3. `Object.freeze(obj)`

- **Prevents adding, deleting, or modifying properties**.
- Makes the object **completely immutable**.
- Returns the same object.

```javascript
const obj = { name: "Alice" };
Object.freeze(obj);

obj.age = 25; // ❌ Fails silently in non-strict mode, throws an error in strict mode
delete obj.name; // ❌ Not allowed
obj.name = "Bob"; // ❌ Not allowed (modification)
```

---

## Key Takeaways
- Use `Object.preventExtensions()` if you want to **prevent new properties from being added**.
- Use `Object.seal()` if you want to **prevent new properties and deletion but allow modification**.
- Use `Object.freeze()` if you want to **make the object completely immutable**.
