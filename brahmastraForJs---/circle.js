const _radius = new WeakMap();

export class Circle { // export --> make this class available to other modules
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log("Circle with radius " + _radius.get(this));
    }
}