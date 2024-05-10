// Objects
// Objects in javascript are those which can ahve properties and things they can do(method).
// for example, blog object can have properties (title, content, author) and methods(publish, unpublish, delete)

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name);

// // user.age = 35;
// console.log(user.age);

// console.log(user['email']); // to display the email
// console.log(user['location']); // to display the location.

// user['name'] = 'chun-li'; // now the name will be chun-li instead of crystal.
// console.log(user.name);

// console.log(typeof user);


// how to add methods to this object

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('the user logged out');
//     },
//     logBlogs: function(){
//         //console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         })
//     }
// };

// user.logBlogs();
// console.log(this);

// user.login();
// user.logout();

// storing objects in arrays 

// const blogs = [
//     {title: 'why mac and cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes:50}
// ];


// storing const blogs in arrays
// console.log(blogs);

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        {title: 'why mac and cheese rules', likes: 30},
    {title: '10 things to make with marmite', likes: 50}
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        //console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

user.logBlogs();
console.log(this);

user.login();
user.logout();

// math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.4;
console.log(Math.round(area));
console.log(Math.floor(area)); 
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random(); // this random number will lawys be any randomly picked number from 0 to 1.

console.log(random); // it will give any one random number from 0 to 1
console.log(Math.random(random )); // it will give any 2 random numbers from 0 to 1
console.log(Math.random(random * 100)); // by multiplying it by 100, i could get the intergers .

// Javascript data types

// primitive values
 let scoreOne = 50;
 let scroeTwo = scoreOne;

 console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scroeTwo}`);

scoreOne = 100;
 console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scroeTwo}`);



