# Emergency Hotline Directory

## 1. Difference Between getElementById, getElementsByClassName, and querySelector / querySelectorAll

Use getElementById for unique IDs.

Use getElementsByClassName or querySelectorAll for multiple elements.

Use querySelector for first matching element with a CSS selector.



## 2. How to create and insert a new element into the DOM
let newDiv = document.createElement("div");

//Add content
newDiv.textContent = "Hello World!";

//Insert into the page
document.body.appendChild(newDiv);

## 3. 
**Event Bubbling** 
Event Bubbling is a way events propagate (travel) in the DOM.

- When an event occurs on an element (e.g., a click), it first triggers on the **target element**.
- Then it **bubbles up** through its parent, grandparent, and all the way up to the `<html>` element.

## 4. Event Delegation in JavaScript

**Event Delegation** is a technique where you attach a single event listener to a **parent element** instead of adding listeners to multiple child elements.

- The parent listens for events on its children using event.target to determine which child was clicked.
- Works with **dynamically added elements**, too.

### Why is it useful?

- Saves **memory** by reducing the number of event listeners.
- Makes it easier to manage events for **dynamic content** added later.

## Difference Between preventDefault() and stopPropagation()

In JavaScript, these two methods are used to control event behavior, but they do **different things**.

###  preventDefault()
- Stops the **default browser action** for an event.
- Commonly used for links, forms, or buttons.

## stopPropagation()

Stops the event from bubbling up the DOM tree to parent elements.

Useful when you want a child element’s event to not trigger parent listeners.


