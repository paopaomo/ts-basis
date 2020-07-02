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
