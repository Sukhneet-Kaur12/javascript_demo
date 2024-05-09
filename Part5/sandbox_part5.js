// Objects
// Objects in javascript are those which can ahve properties and things they can do(method).
// for example, blog object can have properties (title, content, author) and methods(publish, unpublish, delete)

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.name);

// user.age = 35;
console.log(user.age);

console.log(user['email']); // to display the email
console.log(user['location']); // to display the location.

user['name'] = 'chun-li'; // now the name will be chun-li instead of crystal.
console.log(user.name);

console.log(typeof user);
