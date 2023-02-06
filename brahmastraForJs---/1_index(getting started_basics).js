console.log("hello world"); //in this we want to log message on console(logging somethong on console)

// issue with var hence use let key word to declare variable
let name = 'jayesh';
console.log(name);

const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
// value of const cannot be changed

// // primitive type -> number, string, boolean, undefined, null
let name = 'mosh'; // string literal
let age = 30; // number literal
let isApproved = false; // boolean literal
let firstName = undefined; // undefined literal
let selectedColor = null; // null literal
// // in es6 we have another type of variable called symbol

// dynamic typing --> type of variable can be changed on run time
typeof name
    'string'
name = 1
    // 1
typeof name
    'number' //-->on console we can see that type of variable is changed
    // in js we don't have specific int , float ... all is number

// reference type -> object, array, function
// object // --> key value pair
let person = {
    name: 'jayesh',
    age: 30
};
console.log(person);
// // access object properties
// // dot notation
person.name = 'john';
console.log(person.name);

// // bracket notation
person['name'] = 'mary'; //->itis used in dynamic way
console.log(person.name);

// // array --> collection of objects
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);
// console.log(selectedColors[0]);
typeof selectedColors
    'object' // -->console shows that array is also object


// // function --> set of statements to perform a task or calculate a value
// // performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('jayesh', 'pandey');
// // parameter is like variable in function and argument is like value of variable
// // default value of js is undefined

// // types of function
// // calculating a value
function square(number) {
    return number * number;
}
let number = square(2);
console.log(number);
//.log() is a function

// operators
// // arithmetic operators
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y); //x to the power of y

// increment (++)
console.log(x++);
console.log(x);

// // decrement (--)
console.log(x--);
console.log(x);

// // assignment operators
let x = 10;
x++; //x=x+1
x += 5; //->x=x+5
x *= 3; //->x=x*3

// // comparison operators
let x = 1;
// relational operators
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);
// strict equality operators (type and value)
console.log(x === 1);
console.log(x !== 1);
console.log(1 === '1'); //->false->type is different
// lose equality operators (value)
console.log(x == '1'); //->true->type is different
console.log(true == 1);

// // ternary operator
let points = 110;
let type = points > 100 ? 'gold' : 'silver'; //->if points>100 then type is gold else type is silver
console.log(type);

// logical operators 
// logical AND (&&)
// returns TRUE if both operands are TRUE
console.log(true && true);
console.log(true && false); //->false

// logical OR (||)
// returns TRUE if one of the operands is TRUE
console.log(true || false); //->true
console.log(false || false); //->false

// logical NOT (!)
// reverses the boolean value
console.log(!true); //->false

// logical operators with non-boolean
falsy(false) //truthy (true)
falsy(false) //-> undefined, null, 0, false, '', NaN
truthy(true) //-> everything else
false || 'jayesh' // --> 'jayesh' ->if first value is false then it will return second value

// bit wise operators
1 = 00000001 //->8 bits
2 = 00000010
R = 00000011 //->3 , bitwise OR
R = 00000000 //->0 , bitwise AND
console.log(1 | 2); //->3 (bitwise OR)
console.log(1 & 2); //->0 (bitwise AND)
// read, write, execute
// 00000100 ->read
// 00000010 ->write
// 00000001 ->execute
// 00000111 ->read, write, execute
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); //->6
let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message); //->yes

// operator precedence
let x = 2 + 3 * 4;
console.log(x); //->14

swaping variables
let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);