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

// 存取器
const passcode = 'secret passcode';

class User {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName) {
        if(passcode && passcode === 'secret passcode') {
            this._fullName = newName;
        } else {
            console.log('Error: Unauthorized update of user!');
        }
    }
}

const user = new User();
user.fullName = 'Zi Ye';
if(user.fullName) {
    console.log(user.fullName);
}

// 静态属性
class Grid {
    static origin = { x: 0, y: 0 };

    scale: number;

    constructor(scale: number) {
        this.scale = scale;
    }

    calculateDistanceFromOrigin(point: { x: number, y: number }) {
        const xDist = point.x - Grid.origin.x;
        const yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    }
}

const grid1 = new Grid(1.0);
const grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({ x: 3.0, y: 4.0 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 3.0, y: 4.0 }));

// 抽象类
abstract class Department {
    name: string;

    protected constructor(name: string) {
        this.name = name;
    }

    printName(): void {
        console.log('Department Name: ', this.name);
    }

    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports');
    }
}

let department: AccountingDepartment;
department = new AccountingDepartment();
console.log(department.name);
department.printName();
department.printMeeting();
department.generateReports();
