// let age = 25;
// let year = 2019;

// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// var score = 75;
// console.log(score);


// strings
// console.log('hello, world');

// let gmail = 'mariot@theninja.co.uk';
// console.log(email);

// // string concatenation
// let firstName = 'Brandon';
// let lastName = 'Sanderson';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // string characters
// console.log(fullName[0]);

// // string length
// console.log(fullName.length);

// // string methods/function
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result);

// // to find the positin/location of string.
// let index = gmail.indexOf('@');
// console.log(index);

// //common string methods

//let email = 'mario@thenetninja.co.uk';

//let result = email.lastIndexOf('n');

//let result = email.slice(0,5);

//let result = email.substring(4,10);

//let result = email.replace('m', 'w');

// let result = email.replace('n', 'w');

// console.log(result);

let radius = 10;
const pi = 3.14;

//console.log(radius, pi);

//math opeartors +, -, /, **, %

// console.log(10 / 2);

// let result = radius = radius % 3;
//let result = pi * radius ** 2;

// order of operation - B() I** D/ M* A+ S-

// let result = 5 * (10-3)**2;

// console.log(result);

//let likes = 10;

//likes = likes + 1;
//likes++;
//likes--;
//likes += 10; // it will the 10 to the likes.
//likes -= 5; // it will deduct the 5 from the likes.
// likes *= 2; // results 20
//likes /= 2; // results 5

//console.log(likes);

// Nan - not a number
// console.log(5/'hello');
// console.log(5*'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

//template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
    <h2>${title}</h2> 
    <p>By ${author}</p>
    <span>This blog has ${likes}</span> 
`;
console.log(html);