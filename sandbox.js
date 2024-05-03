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
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates
let html = `
    <h2>${title}</h2> 
    <p>By ${author}</p>
    <span>This blog has ${likes}</span> 
`;
console.log(html);

// for storing collection of data
let ninjas = ['shaun', 'ryu', 'chun-li'];
//console.log(ninjas[1]);

let ages = [20, 25, 30, 35]
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

// array methods

// let final = ninjas.join(',');
// console.log(final);

// let Result = ninjas.join('-');
// console.log(Result);

//let Result = ninjas.indexOf('chun-li');// returns position 
//let Result = ninjas.concat(['ken', 'crystal']); // concat will add the new added items to the existing ones.
let result = ninjas.push('ken'); // it returns the length of new array.
result = ninjas.pop();
console.log(ninjas);
console.log(result);

let age = null;
console.log(age, age + 3, `the age is ${age}`);

//booleans and comparisons
console.log(true, false, "true", "false");

// methods can return booleans
let email = 'luigi@netninja.co.uk';
let names = ['mario', 'luigi', 'toad'];
let results = email.includes('!'); // include is used on a string to look if a certain character exists.
results = names.includes('luigi');
console.log(results);

// comparison operators
let Age = 25;
console.log(Age == 25); // == means that asking about are these two variables same?
console.log(Age == 30);
console.log(Age != 30); // this != sign means that is age not equal to 30?
console.log(Age < 30); // if age is less than 30 and this should result true.
console.log(Age <= 25); 

// same with the variables

let Name = 'shaun';
console.log(Name == 'shaun'); //returns true
console.log(Name == 'Shaun'); // returns false as the name starts with capital letter.
console.log(Name > 'crystal'); // as the first letter comes first so it is smaller and returns true. 

let price = 25;

//loose comparision (different types can still be equal)
// console.log(price == 25);
// console.log(price == '25');
console.log(price != 25);
console.log(price != '25');

// strict comparision (different types cannot be equal)
console.log(price === 25); // in this case === sign defines if the values of price is defined exactly and is equal including its string type.
console.log(price === '25');
console.log(price !== 25);
console.log(price !== '25');

// type conversions (converting string into a number type)
let score = '100';

score = Number(score) // in bracket is the score which we want to convert and Number is the what we want to convert into.
console.log(score + 1);

// check the conversion by using type of operator
console.log(typeof score);

let height = String(50);
console.log(height, typeof height);

let Height = Boolean(100);
console.log(Height, typeof Height);

let weight = Boolean(0);
console.log(weight, typeof weight);

//in case of string
let Weight = Boolean('0');
console.log(Weight, typeof Weight);


