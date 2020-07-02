// T & U
function extend<T, U>(first: T, second: U): T & U {
    const result = {} as T & U;

    for(let id in first) {
        result[id] = first[id] as any;
    }

    for(let id in second) {
        if(!result.hasOwnProperty(id)) {
            result[id] = second[id] as any;
        }
    }

    return result;
}

class Person {
    constructor(public name: string) {
    }
}

interface Loggable {
    log(): void
}

class ConsoleLogger implements Loggable {
    log(): void {
        console.log('log');
    }
}

const jim = extend(new Person('Jim'), new ConsoleLogger());

console.log(jim.name);
jim.log();

// T | U
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function isString(x: any): x is string {
    return typeof x === 'string';
}

function padLeft(value: string, padding: string | number) {
    if(isNumber(padding)) {
        return `${new Array(padding + 1).join(' ')}${value}`;
    }
    if(isString(padding)) {
        return `${padding}${value}`;
    }
    throw new Error(`Expected string or number got ${padding}`);
}

console.log(padLeft('Hello World', 4));
console.log(padLeft('Hello World', 'HaHa, '));

// type of protection
interface BirdInterface {
    fly();
    layEggs();
}

interface FishInterface {
    swim();
    layEggs();
}

class Bird implements BirdInterface{
    fly() {
        console.log('bird fly');
    }
    layEggs() {
        console.log('bird lay eggs');
    }
}

class Fish implements FishInterface {
    swim() {
        console.log('fish swim');
    }
    layEggs() {
        console.log('fish lay eggs');
    }
}

function getRandomPet(): Bird | Fish {
    return Math.random() > 0.5 ? new Bird() : new Fish();
}

const pet = getRandomPet();
if(pet instanceof Bird) {
    pet.fly();
}
if(pet instanceof Fish) {
    pet.swim();
}
pet.layEggs();

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

if(isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}

// null 类型
function broken(name: string | null): string {
    function postfix(epithet: string) {
        return `${name!.charAt(0)}. the ${epithet}`;
    }
    name = name || 'Bob';
    return postfix(name);
}

console.log(broken(null));

// 字符串字面量类型
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {

    }
}

const button = new UIElement();
button.animate(0, 0, 'ease-in');
