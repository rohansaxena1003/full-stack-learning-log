import { add, subtract } from "./math.js";

console.log(add(44, 23));
console.log(subtract(12, 4));

import { multiply, divide } from "./math.js";

console.log(multiply(5,7));
console.log(divide(2,4));


/* Example 4 — Rename while importing */
import { add as sum } from "./math.js";
console.log(sum(33,22));

// import greet from "./math.js"; /* Notice there are no braces. That's because this is a default export. */
// console.log(greet('gamma'));


/* Example 6 — Default import can be renamed freely
This is a very important distinction. */
import greet from "./math.js";
import abc from "./math.js";
import myGreet from "./math.js";

console.log(greet('greet'));
console.log(abc('abc'));
console.log(myGreet('aadasd'));
/* All of the above can refer to the same default export.
Why?
Because a default export is not imported by matching a named identifier. */



/* Example 8 — Both named and default export in one file */
import glory, { role } from "./math.js";
console.log(glory(role));


/* Example 9 — Relative paths
This part is simple but essential.

./   current folder
../  one folder up */


/* Example 11 — Import only what you need
You don't need to import everything. */



/* Example 12 — Import everything as one object
This exists, and it's useful to recognize:
import * as math from "./math.js";

console.log(math.add(2, 3));
console.log(math.subtract(10, 5));
*/



import { createIdGenerator } from "./user.js";

const generateId = createIdGenerator();
console.log(generateId);
console.log(generateId()); // 1
console.log(generateId()); // 2
console.log(generateId()); // 3