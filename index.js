// objects in javascript contain keys (or properties) with corresponding values
const user = {
  first_name: 'Sammy',
  last_name: 'Shark',
  age: 25,
  followers: 987,
  sayHi: function () {
    console.log('say hi');
  },
  child: {
    first_name: 'Kingsley',
  },
  list: ['a', 'b'],
};
// we can access properties with dot notation
console.log(user.first_name); // Sammy
console.log(user.age); // 25
// or with array style square bracket syntax
console.log('user[', user['last_name']); // Shark
console.log('user[', user.last_name); // Shark
user.followers = 988; // we can also assign new values to object properties
console.log('before', user);
user.location = 'Pacific Ocean'; // or create new properties

console.log(user);

user.sayHi();
console.log("adfadf")
console.log('this is a Message')
console.info('this is info')
console.warn('this is a warning')
console.error('this is an error');