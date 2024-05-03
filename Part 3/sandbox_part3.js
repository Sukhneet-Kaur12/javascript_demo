// for loops

// inside the brackets, there is a condition if it follows along then only the the code will go to the curly bracket command. 
// and it will execute and loop until the value of i becomes lass than 5.
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



