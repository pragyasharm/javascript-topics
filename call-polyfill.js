let user = {
  name: "pragya",
  age: 25,
};

function userDetails() {
  console.log(`My name is ${this.name} and age is ${this.age}`);
}

userDetails.call(user);
