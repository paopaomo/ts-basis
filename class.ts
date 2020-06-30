class Greeter {
    greeting: string;

    constructor(message) {
        this.greeting = message;
    }

    greet() {
        return `Hello, ${this.greeting}`;
    }
}

const greeter = new Greeter('world');

greeter.greet();

// extends
class Animal {
    name: string;

    constructor(name) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof!');
    }
}

class Snake extends Animal {
    constructor(name) {
        super(name);
    }

    move(distance: number = 5) {
        console.log('Slithering...');
        super.move(distance);
    }
}

class Horse extends Animal {
    constructor(name) {
        super(name);
    }

    move(distance: number = 45) {
        console.log('Galloping...');
        super.move(distance);
    }
}

const dog = new Dog('small dog');
const sammy: Animal = new Snake('Sammy');
const tommy = new Horse('Tommy');

dog.bark();
dog.move(10);
sammy.move();
tommy.move(34);

// protected
class Person {
    protected name: string;

    protected constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    private readonly department: string;

    constructor(name, department) {
        super(name);
        this.department = department;
    }

    getSelfIntroduction() {
        return `Hello, my name is ${this.name}, and I work in ${this.department}`
    }
}

const howard = new Employee('Howard', 'Sales');

console.log(howard.getSelfIntroduction());
