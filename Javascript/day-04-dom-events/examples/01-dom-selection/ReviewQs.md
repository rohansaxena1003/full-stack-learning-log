# Essential review questions
Try answering these without looking above.
1. What does DOM stand for?
2. Is the DOM part of the core JavaScript language?
3. What is the difference between window and document?
4. What does querySelector() return?
5. What does querySelectorAll() return?
6. What happens when querySelector() finds nothing?
7. What happens when querySelectorAll() finds nothing?
8. Why does getElementById() not require #?
9. What is the difference between a child and a descendant?
10. Why is firstElementChild usually preferable to firstChild?

# Short answers
1. Document Object Model.
2. No; it is a browser Web API.
3. window represents the browser tab; document represents the webpage.
4. The first matching element or null.
5. A NodeList containing all matches.
6. It returns null.
7. It returns an empty NodeList.
8. It expects an ID value, not a CSS selector.
9. A child is directly inside; a descendant can be at any depth.
10. It ignores text and whitespace nodes.