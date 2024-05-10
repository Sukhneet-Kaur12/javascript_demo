// // const para = document.querySelector('body > div > p:nth-child(2)'); // for tyhis query selctor, rightclick on text and inspect annd then copy selctor.

// // console.log(para);

// const paras = document.querySelectorAll('p');

// console.log(paras[2]);

// // get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// get elements by their tag name
// const paras = document.getElementsByTagName('p');

// console.log(paras);
// console.log(paras[1]);

const para = document.querySelector('p');
// console.log(para.innerText);
//para.innerText = 'ninjas are awsome';

const paras = document.querySelectorAll('p');

// to use the text property
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
})

const content = document.querySelector('.content');
//console.log(content.innerHTML);
content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

// change the innerHTML
const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

// reference the element which we want to change
const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninjas Website';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color:green');








