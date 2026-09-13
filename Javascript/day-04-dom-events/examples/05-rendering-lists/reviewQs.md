> Essential review questions
1. What does rendering mean?
2. What should be the source of truth: the array or the DOM?
3. Why should the container be cleared before re-rendering?
4. What is the responsibility of createTaskElement()?
5. What is the responsibility of renderTasks()?
6. What should happen before calling renderTasks()?
7. Which array method is useful for updating an object?
8. Which array method is useful for deleting an object?
9. Should display filtering modify the original array?
10. Why does each item need an ID?
11. How should an empty array be rendered?
12. Why is textContent safer for user data?
13. What happens to old child elements when replaceChildren() is called?
14. Why are listeners currently attached during rendering?

> Short answers
1. Converting data into visible interface elements.
2. The array.
3. To prevent duplicate elements.
4. To convert one object into one DOM element.
5. To display the current array in the DOM.
6. The application data should be updated.
7. map().
8. filter().
9. No; create a derived filtered array.
10. To identify the correct object reliably.
11. Display an empty-state message.
12. It treats the value as text rather than HTML.
13. They are removed.
14. Each newly created button needs a working handler.