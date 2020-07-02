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
function padLeft(value: string, padding: string | number) {
    if(typeof padding === 'number') {
        return `${new Array(padding + 1).join(' ')}${value}`;
    }
    if(typeof padding === 'string') {
        return `${padding}${value}`;
    }
    throw new Error(`Expected string or number got ${padding}`);
}

console.log(padLeft('Hello World', 4));
console.log(padLeft('Hello World', 'HaHa, '));

interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Bird | Fish {
}

const pet = getSmallPet();
pet.layEggs();
