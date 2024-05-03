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
























