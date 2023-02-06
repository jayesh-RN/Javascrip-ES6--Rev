// in OOp
let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
}; // encapsulation
employee.getWage();

// ------------> objects --------------->
// if a object has one or more method we say behaviour of the object
// if a object has no method we say it is a data object


// abstraction

function Circle(radius) {
    let color = 'red'; // private  --> local variable to the function only
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 }; // private --> local variable to the function only
    let computeOptimumLocation = function(factor) {
        // ...
    }
    this.draw = function() {
        computeOptimumLocation(0.1); // it will be in the memmory because it is in closure
        // defaultLocation
        // this.radius
        console.log('draw');
    };
}
// Circle.

// geter setter
function Circle(radius) {
    let color = 'red';
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };
    this.getDefaultLocation = function() {
        return defaultLocation;
    };
    this.draw = function() {
        console.log('draw');
    };
    Object.defineProperty(this, 'defaultLocation', { // it will be called as circle.defaultLocation
        get: function() {
            return defaultLocation;
        },
        set: function(value) { // circle.defaultLocation = 1;
            if (!value.x || !value.y)
                throw new Error('Invalid location.');
            defaultLocation = value;
        }
    });
}
const Circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();


// stopwatch
function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function() {
        if (running)
            throw new Error('Stopwatch has already started.');
        running = true;
        startTime = new Date();
    };
    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch is not started.');
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}