// function declaration  
// walk(); --> this will work because the function is hoisted (it's declared before it's called
function walk() {
    console.log('walk');
}
// (can be nammed aur annonymous)function expression
// let run = function Walk() { // named function'
// run(); --> this will throw an error because the function is not defined yet
let run = function() { // annonymous function
    console.log('run');
};
// expression has ; at the end and declaration doesn't -->declaring a variable or a constant then setting it to a function is a function expression
let move = run;
run();
move(); //`run` and `move` are the same function

// hoisting
//--> is the process of moving all the declarations at the top of the current scope (function or global) 
//--> this is done by the javascript engine before the code is executed
//--> this is why we can call a function before it's declared .. it is done automatically by the javascript engine

// arguments
function sum() {
    let total = 0;
    for (let value of arguments) // arguments is an array like object .. it's not an array .. it's an object
        total += value;
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 10));

// rest operator
function sum(discount, ...prices) { // '...prices' is the rest operator .. it will take all the arguments and put them in an array
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
// rest operator must be the last parameter 
console.log(sum(0.1, 20, 30));
// why rest --> we don't know how many arguments will be passed to the function

//  default parameters
function interest(principal, rate = 3.5, years = 5) { // if we don't pass a value for rate or years it will take the default value
    // rate = rate || 3.5; // this is the old way of setting default values
    // years = years || 5;
    return principal * rate / 100 * years;
}
// eak default set kiya toh uske baad wale ko bhi karna padega else use undefined pass karna padega
console.log(interest(10000));

// getters and setters
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// console.log(`${person.firstName} ${person.lastName}`);
// getters --> access properties
// setters --> change (mutate) them
console.log(person.fullName); // this will call the getter
person.fullName = 'John Smith'; // this will call the setter
console.log(person);

// try and catch
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = '';
} catch (e) {
    alert(e);
}
console.log(person);

// local vs global scope
//--> variables declared inside a function are local to that function
//--> variables declared outside a function are global
//--> global variables are properties of the global object (window in the browser)
//--> global variables are bad practice
//--> global variables can be accessed from anywhere in the code
//--> local variables can only be accessed from inside the function
//--> local variables are created and destroyed every time the function is executed
//--> global variables are created when the program starts and destroyed when the program ends

// let and var
//--> var is function scoped
//--> let is block scoped
//--> var variables can be redeclared
//--> let variables cannot be redeclared
//--> var variables can be updated  
//--> let variables can be updated
//--> var variables can be hoisted
//--> let variables cannot be hoisted

// var attaches to window object (global object) --> window.color = 'red';
// let doesn't attach to window object (global object) --> window.color = undefined;
function start() { // start will also be attached to the window object --> how to solve will be discussed later
    for (var i = 0; i < 5; i++) {
        if (true) {
            var color = 'red';
        }
    }
    console.log(color); // this will work because var is function scoped
}

// this
//--> this is a reference to the object that is executing the current function
//--> this is not static
// method --> obj (this = obj)
// function --> global (window, global)  (this = global)

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) { // this will set the value of this to the global object
            console.log(this.title, tag);
        }, this); // this is the second argument of forEach .. it will be used as the value of this inside the function
    }
};
video.showTags();

function Video(title) {
    console.log(this);
}
// playVideo.call({ name: 'Mosh' }, 1, 2); // this will set the value of this to the object passed as the first argument

const v = new Video('a'); // this will set the value of this to the object created by the constructor function

// changing this

// const video = { 
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this; // this is a workaround to set the value of this to the object
//         this.tags.forEach(function(tag) {  // this will set the value of this to the global object
//             console.log(self.title, tag);
//         }, this); // this is the second argument of forEach .. it will be used as the value of this inside the function
//     }
// }; // don't use this

function video(a, b) {
    console.log(this);
};
video.call({ name: 'Mosh' }, 1, 2); // this will set the value of this to the object passed as the first argument
video({ name: 'Mosh' }); // this will set the value of this to the object passed as the first argument
video.apply({ name: 'Mosh' }, [1, 2]); // this will set the value of this to the object passed as the first argument
// call --> this will call the function and set the value of this to the object passed as the first argument
// apply --> this will call the function and set the value of this to the object passed as the first argument
const fn = video.bind({ name: 'Mosh' }); // this will return a new function and set the value of this to the object passed as the first argument
// bind --> this will return a new function and set the value of this to the object passed as the first argument
fn(); // bind give the new object 


const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) { // this will set the value of this to the global object
            console.log(this.title, tag);
        }.bind(this)); // 
    }
};
video.showTags();


// arrow functions
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => { // this will set the value of this to the global object
            console.log(this.title, tag);
        }); // arrow functions don't rebind the value of this it inherits the value of this from the parent
    }
};
video.showTags();

//  excercise 1
// sum of arguments
function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0])) // this is to check if the argument is an array or not
    // ...items is array of arrays so we need to get the first element of the array 
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}
console.log(sum([1, 2, 3, 4]));

// excercise 2
// area of circle
const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle.area);