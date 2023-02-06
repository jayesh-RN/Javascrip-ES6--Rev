// //object oriented programming (OOP) -->type
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); //method

// // factory function --> these factory function produces objects
function createCircle(radius) {
    return {
        radius, // is equivalent to --> radius: radius if the name of the property is the same as the name of the argument
        draw() {
            console.log('draw');
        }
    };
    // return circle;
}
const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);

// // constructor function --> these constructor function creates objects
function Circle(radius) {
    // empty object is created
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
// // this --> is a reference to the object that is executing the current function
const circle = new Circle(1);
// // 1-> it will create an empty object
// // 2-> it will set 'this' to point to that object
// // 3-> it will return the object from this function


// // dyanamic nature of objects
const circle = {
    radius: 1
};
// here const means we can't reassign the 'circle' object
// e.g. circle = {}; //-> this will give error
circle.color = 'yellow'; //--> we can add properties to an object
circle.draw = function() {} //---> we can add properties and methods to an object
delete circle.color;
delete circle.draw;
console.log(circle);

// constructor property
// every object has a 'constructor' property which returns the function that was used to construct or create that object
let x = {};
//built in constructor function
// let x = new object();
// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...



// functions are objects
//when call functioon it will call  the function object
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

const circle1 = new Circle('radius',
    `this.radius = radius;
    this.draw = function(){ console.log('draw'); }`); // calling function object internally 

const circle2 = new Circle1(1); // upare wala 


// const circle = new Circle(1); //if we don't use new keyword then this will point to the global object which is window object in browser and global object in node
// Circle.call({}, 1); //-> means the sameas above
// Circle.apply({}, [1, 2, 3]); //-> means the sameas above

// value vs reference types
let x = 10;
let y = x;
x = 20;
// here x and y are independent of each other
// primitive types are copied by their value
// reference types are copied by their reference

let x = { value: 10 };
let y = x;
x.value = 20;
// x addres hai bro ...
// here x and y are pointing to the same object
// so if we change the value of x then y will also change
// objects are copied by their reference

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj);


// enumerating properties of an object
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
for (let key in circle) {
    console.log(key, circle[key]);
}
//object are not iterable
for (let key of circle) {
    console.log(key);
} //-> this will give error

for (let key of Object.keys(circle)) {
    console.log(key);
}

for (let entry of Object.entries(circle)) {
    console.log(entry);
}
// revise 8 video...

// cloning an object
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
const another = {};
for (let key in circle) {
    another[key] = circle[key];
}
console.log(another);
// or
const another = Object.assign({
    color: 'yellow'
}, circle);
console.log(another);
// or
const another = {...circle };
console.log(another);


// garbage collection
let obj = { value: 10 };
// js engine will automatically remove the object from the memory when it is not used
// this process is called garbage collection
// in java & cpp we have to manually remove the object from the memory

// // math object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);
// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));
// // random numbers
// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));
// to learn more google karle bhai

// string primitive
const message = 'this is my\n' + '\'first\' message';
// in js we have string primitive and string object
// const another = new String('hi')  //-> string object
// escape notation -> \n, \', \"



// template literals
const another = `hi
this is my
'first' message`;
// template literals are string literals allowing embedded expressions
// you can use multi-line strings and string interpolation features with them
// template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes
// template literals can contain placeholders
// these are indicated by the dollar sign and curly braces (${expression})

name = 'john';
const another = `hi , ${name}`;
// we can use any valid javascript expression inside the curly braces
// we can also call functions inside the curly braces
// we can also use ternary operator inside the curly braces
// we can also use object inside the curly braces

//  date object
const now = new Date(); //-> current date and time
const date1 = new Date('May 11 2018 09:00');
//js dates search kare
const date2 = new Date(2018, 4, 11, 9); //-> month is zero based
// date2.setFullYear(2017);	
// date2.setMonth(0);
// date2.setDate(12);
// it has many get and set methods

// exercise

const address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}
showAddress(address);

// factory function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

const address1 = createAddress('a', 'b', 'c');

// constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address2 = new Address('a', 'b', 'c');

// object equality
// address1 === address2; //-> false
// address1 == address2; //-> false
// address1 === address1; //-> true
// address1 == address1; //-> true

// blog post object
const post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author: 'a', body: 'b' },
    ],
    isLive: true
};

// constructor function
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const post1 = new Post('a', 'b', 'c');

// price range object
let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
];

let restaurants = [
    { averagePerPerson: 5 }
];