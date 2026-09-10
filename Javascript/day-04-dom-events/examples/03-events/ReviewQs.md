> Essential review questions
Try answering these without looking above.
1. What is a browser event?
2. What is an event handler?
3. What does addEventListener() do?
4. Why do we pass handleClick instead of handleClick()?
5. Who creates and passes the event object?
6. What does event.type contain?
7. What is the difference between target and currentTarget?
8. What does event.key contain?
9. What is the difference between input and change?
10. Can one element have multiple event listeners?
11. Why are inline onclick attributes discouraged?
12. Why does removeEventListener() need the original function?
13. When should you use a named handler?
14. What does { once: true } do?


> Short answers
1. A signal that something happened in the browser.
2. The function executed in response to an event.
3. It registers a handler for a particular event.
4. The browser must call it later when the event occurs.
5. The browser.
6. The name of the event.
7. target is where it originated; currentTarget owns the running listener.
8. The value of the pressed key.
9. input fires immediately; change fires after the value is committed.
10. Yes.
11. They mix HTML structure with JavaScript behaviour.
12. It must identify the exact registered function object.
13. For reusable, longer, or removable handlers.
14. It automatically removes the listener after one execution.