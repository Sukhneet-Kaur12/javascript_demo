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



































