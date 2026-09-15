> Essential review questions
1. What is event bubbling?
2. In which direction does bubbling occur?
3. What are the three propagation phases?
4. Which phase do normal listeners use by default?
5. What does event.target represent?
6. What does event.currentTarget represent?
7. What does stopPropagation() do?
8. How is it different from preventDefault()?
9. What is event delegation?
10. Why does delegation work for dynamically created elements?
11. Why is closest() useful?
12. Why must the result of closest() be checked?
13. How can a button describe its action?
14. Why might a dataset ID need Number()?
15. Where is the listener attached during delegation?
16. Do mouseenter and focus normally bubble?

> Short answers
1. An event moves from its target to its ancestors.
2. From the inner target toward outer ancestors.
3. Capture, target, and bubble.
4. The bubbling phase.
5. The element where the event originated.
6. The element whose listener is running.
7. It prevents further event propagation.
8. preventDefault() stops a browser action, not propagation.
9. Handling child events through a parent listener.
10. Their events still bubble to the existing parent.
11. It finds the nearest matching ancestor.
12. It returns null when no match exists.
13. Using data-action.
14. Dataset values are strings.
15. On a stable parent element.
16. No.