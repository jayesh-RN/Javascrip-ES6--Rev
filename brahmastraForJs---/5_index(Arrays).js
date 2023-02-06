// Arrays
const numbers = [3, 4];

// End
numbers.push(5, 6);
console.log(numbers);
// beginning
numbers.unshift(1, 2);
console.log(numbers);
// Middle
numbers.splice(2, 0, 'a', 'b');
// numbers.splice(2,0,'a','b','c','d'); --> this will add 4 elements in the array 
// 2 is the index, 0 is the number of elements to be removed, 'a' and 'b' are the elements to be added
console.log(numbers);

// Finding Elements (Primitives)
const numbers = [1, 2, 3, 1, 4];
console.log(numbers.indexOf(1));
console.log(numbers.indexOf(1, 2)); // this will start searching from index 2
console.log(numbers.lastIndexOf(1));
console.log(numbers.indexOf(1) !== -1); // this is a way to check if an element is in an array
console.log(numbers.includes(1)); // this is a way to check if an element is in an array

// Finding Elements (Reference Types)
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];
courses.includes({ id: 1, name: 'a' }); // this will return false because it is a new object
const course = courses.find(function(course) {
    return course.name === 'a';
});
console.log(course);
// in this case, the find method will return the first element that satisfies the condition
const course = courses.findIndex(function(course) {
    return course.name === 'a';
});
console.log(course);

// Arrow Functions -->need to learn more about this... ES6
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];
const course = courses.find(course => course.name === 'a'); // this is the same as the function above

// Removing Elements
const numbers = [1, 2, 3, 4];
const last = numbers.pop(); // this will remove the last element of the array and return it
const first = numbers.shift(); // this will remove the first element of the array and return it
console.log(numbers);
numbers.splice(2, 1); // this will remove the element at index 2 ... here 1 is the number of elements to be removed

// Emptying an Array
let numbers = [1, 2, 3, 4];
// solution 1
numbers = [];
// if don't have any reference to the old array, it will be garbage collected 
// solution 2
numbers.length = 0;
// this will not work if the array is a const
// solution 3
numbers.splice(0, numbers.length);
// solution 4
while (numbers.length > 0)
    numbers.pop();


// Combining and Slicing Arrays
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
const slice = combined.slice(2, 4); // this will return a new array starting from index 2 and ending at index 4
// if we don't specify the end index, it will return the rest of the array
// in primitive types slice will return a copy of the array
// in reference types slice will return a reference to the same array

// spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, 'a', ...second, 'b'];
// this will create a new array and add the elements of the first array, then add 'a', then add the elements of the second array, then add 'b'
//ES6 feature 

// Iterating an Array
const numbers = [1, 2, 3];
for (let number of numbers)
    console.log(number);

// forEach method
// numbers.forEach(function(number) { 
//     console.log(number);
// });
numbers.forEach((number, index) => console.log(index, number));

// Joining Arrays
const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined);
// this will return a string with the elements of the array separated by a comma

// Splitting Strings
const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);
// this will return an array with the elements of the string separated by a space

const combined = parts.join('-');
console.log(combined);
// this will return a string with the elements of the array separated by a dash

Sorting Arrays

const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers);
// this will sort the array in ascending order
// this will not work for reference types
numbers.reverse();
console.log(numbers);

// Sorting Arrays (Reference Types)
const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
];
courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
// this will sort the array in ascending order based on the name property
// this will not work for primitive types

// Testing the Elements of an Array
const numbers = [1, -1, 2, 3];
// every method
const allPositive = numbers.every(function(value) {
    return value >= 0;
});
console.log(allPositive); // this will return false because there is a negative number in the array

// some method
const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});
console.log(atLeastOnePositive); // this will return true because there is a positive number in the array

// Filtering an Array
const numbers = [1, -1, 2, 3];
// const number =  numbers.filter(function(value) {
//     return value >= 0;
// });
const filtered = numbers.filter(n => n >= 0);
console.log(filtered); // this will return a new array with only the positive numbers

Mapping an Array
const numbers = [1, -1, 2, 3];
const items = numbers.map(n => '<li>' + n + '</li>');
// this will return a new array with the elements of the array in a list
const items = numbers.map(n => ({ value: n }));
// this will return a new array with the elements of the array in an object
const html = '<ul>' + items.join('') + '</ul>';
// this will return a string with the elements of the array in a list
console.log(html); // this will return a string with the elements of the array in a list

mappping an array of objects
const items = numbers.map(n => {
    const obj = { value: n };
    return obj;
});
this will
return a new array with the elements of the array in an object
const item = numbers.map(n => ({ value: n })); // this is the same as the function above es6 feature

Chaining Array Methods
const numbers = [1, -1, 2, 3];
const filtered = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
console.log(filtered); // this will return a new array with only the positive numbers greater than 1
// this is called chaining
// filter to positive numbers then map to an object then filter to numbers greater than 1 then map to their value

// Reducing an Array
const numbers = [1, -1, 2, 3];
let sum = 0;
for (let n of numbers)
    sum += n;

const sum = numbers.reduce((accumulator, currentValue) => { // reduce will return a single value .. 
    return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator ... if not specified it will be the first element of the array
//a = 0, c = 1 => a + c
//a = 1, c = -1 => a + c
//a = 0, c = 2 => a + c
//a = 2, c = 3 => a + c
// this will return the sum of the elements of the array

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // this is the same as the function above es6 feature

// Exercise 1 - Array from Range
const numbers = arrayFromRange(-10, -4);
console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}

// Exercise 2 - Includes
const numbers = [1, 2, 3, 4];
const output = includes(numbers, 1);
console.log(output);

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}

// Exercise 3 - Except
const numbers = [1, 2, 3, 4];
const output = except(numbers, [1, 2]);
console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}

// Exercise 4 - Moving an Element
const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 1);
console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0]; // this will remove the element at the index and return it in an array and store it in element .. [0] to get the element
    output.splice(position, 0, element); // this will insert the element at the position
    return output;
}