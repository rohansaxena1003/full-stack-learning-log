> Essential review questions
1. What is the purpose of an HTML form?
2. What is the difference between id and name?
3. Why should a label’s for match the input’s id?
4. What does .value return?
5. How do you read whether a checkbox is selected?
6. Why should text input usually be trimmed?
7. Which event should be handled for a form?
8. Why attach the listener to the form instead of only the button?
9. What does preventDefault() do?
10. What does required do?
11. What does checkValidity() return?
12. What is input.validity?
13. Why might a form use novalidate?
14. How does FormData identify controls?
15. What does form.reset() do?
16. Is client-side validation sufficient for security?

> Short answers
1. It collects user input.
2. id identifies a DOM element; name identifies submitted data.
3. It connects the label to the control.
4. The control’s current value, usually as a string.
5. Using .checked.
6. To remove unwanted surrounding whitespace.
7. The submit event.
8. Forms can also be submitted by pressing Enter.
9. It prevents the browser’s default submission behaviour.
10. It prevents an empty control from being valid.
11. A Boolean indicating whether the constraints are satisfied.
12. An object describing the control’s validation state.
13. To implement custom validation feedback.
14. Using their name attributes.
15. It restores controls to their initial values.
16. No; the server must validate again.