// for loops

// inside the brackets, there is a condition if it follows along then only the the code will go to the curly bracket command. 
// and it will execute and loop until the value of i becomes lass than 5.
// i = 0 is initialization, i < 5 is condition, i++ is final expression
for(let i = 0; i < 5; i++){
    console.log('in loop:', i);
}

console.log('loop finished');

// for eaxmple each loop do something in array 
// to count/ to know the unlimited number of data or names for loop works
const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){ // we used length to count the number of names in the provide data.
    console.log(i);
}

// now to look over the names in loop
for(let i = 0; i < names.length; i++){ // we used length to count the number of names in the provide data.
    console.log(names[i]);
}

// now if we want to create a little snippet or template of html

for(let i = 0; i < names.length; i++){ // we used length to count the number of names in the provide data.
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// While loop
// only difference between for and while loop is syntax. 
//let i = 0; // in while loop, we declare i outisde the loop
// while(i < 5){
//     console.log('in loop:', i);
//     i++;
// }

// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// do while loop
let i = 3; 
 do{
    console.log('val of i is: ', i);
    i++;
 }
 while(i < 5);

 // if statements
 const aGe = 21;

 if(aGe > 20){
    console.log('you are over 20 years old.');

 }

 const ninja = ['shaun', 'ryu', 'chin-lu', 'youshi'];

 if(ninja.length > 3){
    console.log("that's a lot of ninjas");
 }
 
 // to see if the password length is long than 8 characters in it then only it will say that line.
// const password = 'p@ssword';

// if(password.length >= 8){
//     console.log('that password is long enough!')

// }else {             // else statement use with same if statement example.
//     console.log('That password is not long enough1')
// }

// if else statements is for multiple statements or conditions to pass 
// const password = 'p@ssword1234';

// if(password.length >= 12){
//     console.log('Thta password is might strong.');
// }else if(password.length >= 8){         // else if statement
//     console.log('that password is long enough!');

// }else {             // else statement use with same if statement example.
//     console.log('That password is not long enough1');
// }

// logical opeartors - OR || and AND &&
const password = 'p@ss';

if(password.length >= 12 && password.includes('@')){
    console.log('That password is might strong.');
}else if(password.length >= 8 || password.includes('@') && password.length >= 5 ){         // else if statement
    console.log('that password is long enough!');

}else {             // else statement use with same if statement example.
    console.log('That password is not long enough1');
}

// logical NOT (!)

let user = false;

if(!user){
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){
    console.log('your score: ', scores[i]);

if(scores[i] === 100){
    console.log('congrates, you got the top score!');
    break;
}
}


// using if statements

// if(grade === 'A'){

// }else if(garde === 'B'){
    
// }else if(garde === 'C'){
    
// }else if(garde === 'D'){
    
// }else if(garde === 'E'){
    
// }


// switch statements
// for multiple statements or conditions we apply switch statements
// only strings works in these cases, not the numbers/integers.
const grade = 'S';

switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('Not a valid grade!');
}

// variables and block scope
let age = 30;

if(true){
    console.log('inside 1st code block: ', age);
}

console.log('outside code block: ', age);





























