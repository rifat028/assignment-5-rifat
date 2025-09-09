1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById & querySelector is used to return a single element. getElementById use specific id to capture the element where as querySelector use a query to capture the element. querySelector returns the first element that matches a CSS selector. on the other hand querySelectorAll return all elements that match a CSS selector as a node list. getElementsByClassName return all elements with a specific class name as a HTML collection.

2. How to create and insert a new element into the DOM
Ans:    i. Get and store the parent node.
        ii. Create a child node and add content to the node.
        iii. append/include the child node in the parent node.

3. What is Event Bubbling and how does it work?
Ans: After triggering a event in a specific element in the DOM tree it climb upward to the root like a bubble by handling all its parent element. This traversal is known as Event Bubbling. 
It starts bt firing on the target element. After handling the target element it bubbles up and handel the parent element. This process continues till the root element is reached.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is a process of adding one event listener to the parent of multiple child element. It utilize event bubbling. It is useful because one simple event listener on a parent element is more efficient and automatically works for any new child elements added. Reduce code complexity.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() Stops a default browser action for an event. On the other hand stopPropagation() Stops an event from bubbling up in the DOM tree.
