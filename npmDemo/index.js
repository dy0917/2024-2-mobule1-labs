const User = function (name) {
  this.name = name;
  this.updateName = (name) => {
    this.name = name;
    // console.log(this); // 'this' is the current object
    return this; // if we return it, we can 'chain' object methods together
  };
  this.addLocation = (location) => {
    this.location = location;
    // console.log(this); // 'this' is the current object
    return this; // if we return it, we can 'chain' object methods together
  };
  this.printGreeting = () => {
    console.log(`Hello, I'm ${this.name} in ${this.location}`); // 'this' is the current object
  };
};

const kUser = new User('kingsley');
const hUser = new User('h');
console.log(kUser.updateName('1231233').printGreeting());
console.log(hUser.addLocation('Auckland').printGreeting());

const user = {
  name: 'John',
};

const a = [1, 2, 3];

console.log(a[a.length - 1]);
