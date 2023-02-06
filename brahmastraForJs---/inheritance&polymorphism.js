// prototypical inheritance

// create your own prototypical inheritance
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log("duplicate");
}

function Circle(radius, color) {
    Shape.call(this, color); // calling super constructor
    this.radius = radius;
}
// Circle.prototype = object.create(object.prototype); // object base --> this is what it is ... in next line we change it
// Circle.prototype.constructor = Circle; // this is the constructor of the object
// new Circle.prototype.constructor();  ==> this is the same as new Circle();
Circle.prototype = Object.create(Shape.prototype); // this is the prototypical inheritance
// Circle.prototype.constructor = Shape;  --> constructor has changed .. so now we cannot use Circle.prototype.constructor
// hence after inheritance(reset the prototype) we need to reset the constructor 
// resetting the constructor...
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log("draw");
}

function Square(size) {
    this.size = size;
}

function extend(Child, Parent) { // intermidiate fuction inheritance
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Parent;
}
extend(Circle, Shape);

const s = new Shape();
const c = new Circle(1);



// Method overriding
function extend(Child, Parent) { // intermidiate fuction inheritance
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Parent;
}

function Shape() {}

Shape.prototype.duplicate = function() {
    console.log("duplicate");
}

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function() { // overriding the duplicate method --> this is called method overriding
    Shape.prototype.duplicate(); // calling the parent method --> without using 'this'
    Shape.prototype.duplicate.call(this);
    console.log("duplicate circle");
}

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function() {
        console.log("duplicate square");
    }
    // many forms of duplicate method  poly-morphism
const shapes = [
    new Circle(),
    new Square()
];

for (let shape of shapes)
    shape.duplicate(); // depending on the object it will call the different duplicate method
// polymorphism profit ^^^


// composition --> mixins

function mixin(target, ...sources) { // mixins
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log("eating");
    }
};

const canWalk = {
    walk: function() {
        console.log("walking");
    }
};

const canSwim = {
    swim: function() {
        console.log("swimming");
    }
};

function Person() {}
// const person = Object.assign({}, canEat, canWalk); // this is the composition 
Object.assign(person.prototype, canEat, canWalk);
const person = new Person();
// using mixins it will be--->
mixin(Person.prototype, canEat, canWalk);

function Goldfish() {}
Object.assign(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();

// using mixins it will be--->
mixin(Goldfish.prototype, canEat, canSwim);
console.log(person);



// excercise  --> video wapas  dek lena kush toh locha hai 
function HtmlElement() {
    this.click = function() {
        console.log("clicked");
    }
}

HtmlElement.prototype.focus = function() {
    console.log("focused");
}

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() {
            return `
        <select>${this.items.map(item => `
            <option>${item}</option>`).join('')}
        </select>`;
    }
}

HtmlSelectElement.prototype = new HtmlElement(); // in this we have click method
// htmlSelectElement.prototype = Object.create(HtmlElement.prototype); // --> this will not work because(it doesn't have click) -->
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


// excercise

function HtmlImageElement(src) {
    this.src = src;
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;


HtmlImageElement.prototype.render = function() {
    return `<img src="${this.src}"/>`;
}

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('http://')
];

for (let element of elements)
    console.log(element.render());