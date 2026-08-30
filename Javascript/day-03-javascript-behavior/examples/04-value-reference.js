// let a = 10;
// let b = a;

// b = 20;
// console.log(a,b);

// const user1 = { name: "Rohan" };
// const user2 = user1;

// user2.name = "John";
// console.log(user1, user2);



// const obj = {
//   name: "Ro"
// };

// console.log(obj.name); // Ro
// console.log(obj["name"]); // Ro
// console.log(obj.name === obj["name"]); // true


// const a = { value: 10 };
// const b = { value: 10 };
// const c = a;

// console.log(a === b); // false
// console.log(a === c); // true
// console.log(b === c); // false



const user = {
    name: "Rohan"
};

function change(person) {
  // person contains reference to user
  console.log(user); // { name: 'Rohan' }
  console.log(person); // { name: 'Rohan' }
  console.log(user === person); // true
  person = { // now person contains refernce to this new object
    name: "Sam"
  };
  console.log(person); // { name: 'Sam' }
}

change(user);

console.log(user.name); // Rohan