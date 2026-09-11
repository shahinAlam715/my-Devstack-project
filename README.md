# React + TypeScript + Vite
* My Project name is my-Devstack-project.
* Descriptio:
* DevStack is a responsive technology platform built with React, TypeScript, and Tailwind CSS, featuring technology        exploration and an interactive add-to-cart system.
* I'am use Technology:
* Tailwind css
* Disyui
* React
* TypeScript

* Three features about my project:
* Modern/Dynamic
* Fully Responsive
* Interactive


** Answer Some qution **
i. What is JSX, and why is it used in React?
Answer:JSX (JavaScript XML) is a syntax that lets us write HTML-like code inside JavaScript.
It is used in React to make UI code easier to write, read, and understand.

ii. What is the difference between props and state?
Answer:Props are used to pass data between components, while state is used to manage changing data within a component.

iii. What does the useState hook do, and where did you use it in this project?
Answer:useState is a React Hook used to manage changing data in a component. In my DevStack project, I used it to manage the Add to Cart data and button state.

iv. What does the useEffect hook do, and why did you need it to load the JSON data?
Answer:useEffect is used to handle side effects like fetching data. I used it to fetch the JSON data when the component loads and store the data in state.

v. Why does every item in a .map() list need a unique key prop?
Answer:Each item in a .map() list needs a unique key so React can identify and efficiently update individual items when the list changes.

vi. What is conditional rendering? Show one place you used it (example: the empty stack message).
Answer:Conditional rendering means showing different UI based on a condition. In my DevStack project, I used it to show an empty stack message when no items were added, otherwise I displayed the added items.

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer:Parent-to-child data is passed through props. A child sends data back to the parent by receiving a callback function as a prop and calling it.
