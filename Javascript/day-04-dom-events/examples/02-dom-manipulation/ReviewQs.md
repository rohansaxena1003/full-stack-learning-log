18. Essential review questions
Try answering these without looking above.
1. What does DOM manipulation mean?
2. What is the difference between reading and assigning textContent?
3. What is the main difference between textContent and innerHTML?
4. Why should user input not be inserted directly using innerHTML?
5. What does classList.add() do?
6. What is the difference between classList.add() and className?
7. What does classList.toggle() do?
8. What does document.createElement() return?
9. Does createElement() immediately display the element?
10. What is the difference between append() and prepend()?
11. What happens if you append an element already in the DOM?
12. How can you remove an element?
13. How can you clear all children from a container?
14. How are data-* attributes accessed in JavaScript?


Short answers
1. Changing the webpage through the DOM API.
2. Reading gets the text; assigning changes it.
3. textContent treats content as text; innerHTML parses HTML.
4. It can create an XSS security vulnerability.
5. It adds a CSS class without removing existing classes.
6. className replaces all classes; classList.add() preserves them.
7. It adds an absent class or removes an existing class.
8. A new DOM element.
9. No; it must be inserted into the DOM.
10. append() adds at the end; prepend() adds at the beginning.
11. It is moved to the new location.
12. Use element.remove().
13. Use element.replaceChildren().
14. Through element.dataset.