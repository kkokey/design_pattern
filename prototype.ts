abstract class Shape {
    public x: number;
    public y: number;
    public color: string;

    constructor() {
    }

    public clone(): Shape {
        const clone = Object.create(this);
        return clone;
    }
}

class Rectangle extends Shape {
    public width: number;
    public height: number;
    
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    public clone(): Rectangle {
        const clone = Object.create(this);
        return clone;
    }
}

class Circle extends Shape {
    public radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    public clone(): Circle {
        const clone = Object.create(this);
        clone.radius = Number(this.radius);
        return clone;
    }
}


const shapes: Shape[] = Array<Shape>();

const circle: Circle = new Circle(100);
circle.x = 10;
circle.y = 20;
circle.color = 'white'

const shapeFromCircle = circle.clone();

const rectangle: Rectangle = new Rectangle(30, 40);
rectangle.x = 100;
rectangle.y = 200;
rectangle.color = 'black'

const shapeFromRectangle = rectangle.clone();

shapes.push(shapeFromCircle);
shapes.push(shapeFromRectangle);

console.log('shapes: ', shapes);

console.log('--- shapeFromCircle ---');
console.log('x: ', shapeFromCircle.x === circle.x, '|', shapeFromCircle.x);
console.log('y: ', shapeFromCircle.y === circle.y, '|', shapeFromCircle.y);
console.log('color: ', shapeFromCircle.color === circle.color, '|', shapeFromCircle.color);
console.log('radius: ', shapeFromCircle.radius === circle.radius, '|', shapeFromCircle.radius);

console.log('--- shapeFromRectangle ---');
console.log('x:', shapeFromRectangle.x === rectangle.x, '|', shapeFromRectangle.x);
console.log('y:', shapeFromRectangle.y === rectangle.y, '|', shapeFromRectangle.y);
console.log('color:', shapeFromRectangle.color === rectangle.color, '|', shapeFromRectangle.color);
console.log('width:', shapeFromRectangle.width=== rectangle.width, '|', shapeFromRectangle.width);
console.log('height:', shapeFromRectangle.height === rectangle.height, '|', shapeFromRectangle.height);