//Function showScores()
//Function convertCoords, it converts the coordinates into addesses. for eg: convertCoords(1029,869)

// function declaration, in ihis we donot store function inside variable
function greet(){
    console.log('hello there');
}

// function expression, here we store function inside varible
const speak = function(){
    console.log('good day');
}

greet();
greet(); // we could do it multiple times.

speak();

//hoisting is we could declare the function after we pass the console statement.
// so in javascript is hoisting the functions declared afterwards.
// javascript only hoist function declaration not the function expression.

greet();
function greet(){
    console.log('hello there');
}

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
const calcArea = (radius) => {
    return 3.14 * radius**2;
}

const area = calcArea(5);
console.log('area is:', area);






























