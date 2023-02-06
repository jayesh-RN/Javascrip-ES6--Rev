// ES6 classes

// imp website --> babeljs.io
class Circle { // class is a function
    constructor(radius) {
        this.radius = radius;
        this.move = function() {} // from this it will be in object not in prototype
    }
    draw() {
        console.log('draw');
    }
}

const c = new Circle(1);

class Circle {} // --> use class declaration..
const Square = class {};
//  unlikle function, class is not hoisted
'use strict'; // if we call method as a function it will give undifined and no longer point on window object
class circle { // by default class is strict mode
    constructor(radius) {
            this.radius = radius;
        }
        // instance method
    draw() {
            console.log('draw');
        }
        // static method
    static parse(str) { // used to create utility functions e.g. math functions
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}
const circle = Circle.parse('{"radius : 1"}'); // to call static method we don't need to create object

// private properties and methods using symbols
const _radius = Symbol(); // every symbol is unique
const _draw = Symbol();
class Circle {
    constructor(radius) {
            this[_radius] = radius; // we can't access this property outside of the class
        }
        [_draw]() { // we can't access this method outside of the class
            console.log('draw');
        }
}

// private properties and methods using weakmap
const _radius = new WeakMap();
const _move = new WeakMap();
class Circle {
    constructor(radius) {
        _radius.set(this, radius); // key is this and value is radius
        _move.set(this, () => {
            console.log('move', this);
        });
    }
    draw() {
        console.log(_radius.get(this)); // way to get value 
        _move.get(this)();
        console.log('draw');
    }
}

// getters and setters
const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
    get radius() {
        return _radius.get(this);
    }
    set radius(value) {
        if (value <= 0) throw new Error('Invalid radius');
        _radius.set(this, value);
    }
}

// inheritance
class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('move');
    }
}
class Circle extends Shape { // inheritance
    constructor(color, radius) {
        super(color); // call parent constructor --> we have to call this to initialize base object .. to implement contructor in child class
        this.radius = radius;
    }
    draw() {
        console.log('draw');
    }
}

const c = new Circle('red', 1);

// method overriding
class Shape {
    move() {
        console.log('move');
    }
}
class Circle extends Shape {
    move() {
        super.move(); // call parent method
        console.log('circle move'); // method overriding
    }
}

// excerise
// implement stack
const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }
    get count() {
        return _items.get(this).length;
    }
    push(obj) {
        _items.get(this).push(obj);
    }
    pop() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error('Stack is empty');
        return items.pop();
    }
    peek() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error('Stack is empty');
        return items[items.length - 1];
    }
}