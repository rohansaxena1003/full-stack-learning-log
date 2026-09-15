// Basic bubbling example
// const container =
//     document.querySelector("#container");

// container.addEventListener("click", (event) => {
//     console.log(event.target);
//     console.log(event.currentTarget);
//     console.log('--------');
// });


// 10. A basic delegation example
// const taskList =
//     document.querySelector("#task-list");

// taskList.addEventListener("click", (event) => {
//     if (event.target.dataset.action === "delete") {
//       // console.log(event.target.parentElement.textContent);
//       console.log("Delete button clicked");
//     }
// });


/* Events that do and do not bubble
Many commonly used events bubble:
- click
- input
- change
- keydown
- keyup
- submit
Some events do not normally bubble:
- mouseenter
- mouseleave
- focus
- blur
Related alternatives that bubble include:
- mouseover instead of mouseenter
- mouseout instead of mouseleave
- focusin instead of focus
- focusout instead of blur
*/