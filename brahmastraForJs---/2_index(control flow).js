// conditional statement
let hour = 10;
if (hour >= 6 && hour < 12) {
    console.log('Good morning');
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good evening');
}

// switch statement
let role = 'guest';
switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    default:
        console.log('Unknown user');
}

// // for loop
for (let i = 0; i < 5; i++) {
    console.log('Hello World', i);
}

// while loop
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

// do while loop
let i = 0;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
}
while (i <= 5);

// infinite loop
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
}

// for in loop --> used to iterate over properties of an object
const person = {
    name: 'Jayesh',
    age: 25
};
for (let key in person) {
    console.log(key, person[key]);
}

// for of loop --> used to iterate over elements of an array
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

// break and continue
// break --> used to terminate the loop
// continue --> used to skip the current iteration of the loop
for (let i = 0; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}


let b = max(2, 10);
console.log(b);

function max(a, b) {
    return (a > b) ? a : b;
}

Math.floor(1.3) //->3