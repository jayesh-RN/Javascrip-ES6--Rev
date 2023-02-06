// inheritance
// but in java we don't have class keyword to create class
// hence prototypical inheritance come into picture

// <----------->

let person = { name: mosh }
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString'); // to get the property descriptor
console.log(descriptor);


Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false, // we can't iterate over this property
    configurable: false // we can't delete this property
});

// Constructor prototype ....
objectBase.getPrototypeOf(myObj);
// myObj.__proto__  (parent of myObj)
// constructor.prototype()  // equal to --> (parent of myObj)

function Circle(radius) {
    this.radius = radius;
}

// Circle.prototype  // this is the constructor prototype-> it wil be used as parent of the object created by this constructor


// prototype vs instance members
function Circle(radius) {
    // instance members
    this.radius = radius;

    this.move = function() {
        this.draw(); // we can access prototype members from instance members
        console.log('move');
    }
}
// prototype members
Circle.prototype.draw = function() {
        console.log('draw');
        this.move(); // we can access instance members from prototype members
        console.log(this.radius); // we can access instance members from prototype members
    }
    // in both this type we can refrence both the object
const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}
c1.toString(); // Circle with radius 1


for (let key in c1) { // this will iterate over all the members of the object
    if (typeof c1[key] !== 'function')
        console.log(key, c1[key]);
}

console.log(Object.keys(c1)); // this will return all the keys of the object it will iterate on the prototype members
const keys = Object.keys(Circle.prototype);
const keys = Object.getOwnPropertyNames(Circle.prototype);


// avoid exctending the build in objects
//  becz tomorrow if you will use library which is using the same name then it will give you error

// excercise
function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; },
        set: function(value) { duration = value; } // it can be modified outside this is the problem --> broke abstraction property
    });
    Object.defineProperty(this, 'startTime', { // it can't use it w/0 this by prototype
        get: function() { return startTime; }
    });
    Object.defineProperty(this, 'endTime', {
        get: function() { return endTime; }
    });
    Object.defineProperty(this, 'running', {
        get: function() { return running; }
    });

}

Stopwatch.prototype.start = function() {
    if (this.running)
        throw new Error('Stopwatch has already started.');

    this.running = true;

    this.startTime = new Date();
};

Stopwatch.prototype.stop = function() {
    if (!this.running)
        throw new Error('Stopwatch is not started.');

    this.running = false;

    this.endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duration += seconds;
};

Stopwatch.prototype.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
};