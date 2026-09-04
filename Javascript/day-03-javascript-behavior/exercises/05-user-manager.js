/* Final small coding challenge

Build:
class User {
    // constructor
}
Each user should have:
name
age
Add:
getDetails()
which returns something like:
Rohan - 25
Then create at least two instances and prove:
user1 !== user2
and:
user1.getDetails === user2.getDetails
This ties Topic 9 into the coding work.
*/

class User {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
  getDetails() {
    return `${this.name} - ${this.age}`;
  }
};

const user1 = new User('Rohan', 25);
const user2 = new User('Sam', 63);
console.log(user1 === user2); // false
console.log(user1.getDetails == user2.getDetails); // true
console.log(user1.getDetails() === user2.getDetails()); // false