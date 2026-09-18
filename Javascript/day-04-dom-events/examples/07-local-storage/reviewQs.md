> Essential review questions
Try answering before reading the short answers.
1. Why do ordinary variables lose changes after a refresh?
2. What does localStorage contain?
3. What does getItem() return when a key is absent?
4. What does JSON.stringify() do?
5. What does JSON.parse() do?
6. Why not pass an object directly to setItem()?
7. Does changing an object automatically update storage?
8. Why should JSON parsing use error handling?
9. Does valid JSON necessarily contain valid application data?
10. What is the difference between removeItem() and clear()?
11. Should loading or saving happen first at startup?
12. Does loading data automatically update the DOM?

> Short answers
1. The script runs again and recreates them.
2. String key–value pairs.
3. null.
4. Converts data into a JSON string.
5. Converts JSON text into JavaScript data.
6. Ordinary string conversion does not preserve its structure.
7. No; save the updated value again.
8. Malformed JSON throws an error.
9. No; validate the expected structure too.
10. One key versus all local-storage entries for the origin.
11. Load first.
12. No; call the rendering function.