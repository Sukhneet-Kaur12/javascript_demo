//Function showScores()
//Function convertCoords, it converts the coordinates into addesses. for eg: convertCoords(1029,869)

// function declaration, in ihis we donot store function inside variable
// function greet(){
//     console.log('hello there');
// }

// function expression, here we store function inside varible
const speak = function(){
    console.log('good day');
}

// greet();
// greet(); // we could do it multiple times.

// speak();

//hoisting is we could declare the function after we pass the console statement.
// so in javascript is hoisting the functions declared afterwards.
// javascript only hoist function declaration not the function expression.

// greet();
// function greet(){
//     console.log('hello there');
// }

// arguments and parameters

// const Speak = function(name, time){
//     console.log(`good day ${name}`);
//     console.log(`Good ${time} ${name}`);
// };

// Speak('mario', 'morning');

const Speak = function(name = 'luigi', time = 'night'){
    console.log(`Good ${time} ${name}`);
};
Speak(); // the output will take the defined or declared varibales or values for name and time. eg. good night luigi
Speak('Mario') // here, the output will take the name of mario but hte time is not defined do it will be same as declared in the function. eg, good night mario. 
Speak('mario', 'morning'); //here the name and time is defined so it will be like good morning mario.

// Regular functions
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// arrow function
const calcArea = (radius) => { // is there is only one parameter in parenthesis like here is radius so we can remove the parenthesis. but if there are more than 1 parameters, then the parenthesis are must. like (radius, something).
    return 3.14 * radius**2;
}

// also, we donot need to mention return in this. this could be done by removing parenthesis. 
// const calcArea = (radius) =>  3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area);

//Practise arrow functions

// const greet = function(){
//     return 'hello, world';
// };

//const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2));


// functions
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// //methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// callback and foreach

const myFunc = (callbackFunc) => {
    // do somehting
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    // do something
    console.log(value);
});

// using a built in right method

// callback and foreach

let poeple = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

poeple.forEach(function(){
    console.log('something');
});
// so the result will be written as "5 something"

poeple.forEach(function(person){
    console.log(person);
});
// so now the result will be show all the names of the people.


// now by using arrow function for the above
poeple.forEach(person => {
    console.log(person);
}); 

// we could also add the index for the person like starting from 0, 1, 2, 3, 4 for each person along with their names.
poeple.forEach((person, index) => {
    console.log(index, person);
}); 

// we could also add variables along with names and index like hello mario,.. so on.
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

poeple.forEach(logPerson); 

// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(function(person){
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);













