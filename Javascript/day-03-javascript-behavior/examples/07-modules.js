/* Exporting module features
The first thing you do to get access to module features is export them. This is done using the export statement.

The easiest way to use it is to place it in front of any items you want exported out of the module, for example:
*/

export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}

/* You can export functions, var, let, const, and — as we'll see later — classes. 
They need to be top-level items: for example, you can't use export inside a function. */




/* Importing features into your script
Once you've exported some features out of your module, you need to import them into your script to be able to use them. The simplest way to do this is as follows: */
// import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";