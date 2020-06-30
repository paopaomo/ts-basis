// interface
interface LabelValue {
    label: string;
    [propName: string]: any; // 额外属性
}

function printLabel(labelObj: LabelValue) {
    console.log(labelObj.label);
}

printLabel({ label: 'Size 10 Object', size: 10 });

// 可选属性
interface Square {
    color: string;
    area: number;
}

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): Square {
    const newSquare = {
        color: 'white',
        area: 100
    };
    if(config.color) {
        newSquare.color = config.color;
    }
    if(config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

const mySquare = createSquare({ color: 'black' });

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

const p1: Point = { x: 10, y: 20 };

// 只读属性[泛型]
const a: number[] = [1, 2, 3, 4];
const ro: ReadonlyArray<number> = a;

// 函数类型interface
interface SearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (source, subString) => {
    return source.search(subString) > -1;
};

// 索引签名
interface StringArray {
    [index: number]: string;
}

const myArray = ['Bob', 'Fred'];

const myString: string = myArray[0];

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

interface NotOkay {
    [x: number]: Dog;
    [x: string]: Animal;
}

// 类类型
interface ClockInterface {
    tick();
}

interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface;
}

function createClock(Ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new Ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(hour: number, minute: number) {

    }

    tick() {
        console.log('beep beep');
    }
}

class AnalogClock implements ClockInterface {
    constructor(hour: number, minute: number) {

    }

    tick() {
        console.log('tick toc');
    }
}

const digital = createClock(DigitalClock, 12, 17);
const analog = createClock(AnalogClock, 7, 32);

// 接口继承
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number
}

interface Circle extends Shape, PenStroke {
    sideLength: number;
}

const circle = {} as Circle;
circle.color = 'blue';
circle.sideLength = 10;
circle.penWidth = 5.0;

// 混合类型
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    const counter = ((start: number) => {

    }) as Counter;

    counter.interval = 123;

    counter.reset = () => {};

    return counter;
}

const c = getCounter();
c(10);
c.interval;
c.reset();

// 接口继承类
class Control {
    private state: any
}

interface SelectableControl extends Control {
    select()
}

class Button extends Control implements SelectableControl {
    select() {
    }
}

class TextBox extends Control {
    select() {

    }
}

// ImageC 没有 extends Control,没有 state 属性,所以不能 implements SelectableControl
// class ImageC implements SelectableControl {
//     select() {
//     }
// }
