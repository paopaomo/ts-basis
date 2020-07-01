// 泛型
function identity<T>(arg: T): T {
    return arg;
}

const output1 = identity<string>('myString1');
const output2 = identity('myString2'); // 类型推断,保证代码的简洁

// 泛型类型
const myIdentity1: <T>(arg: T) => T = identity;
const myIdentity2: { <T>(arg: T): T } = identity;

interface GenericIdentityFn<T> {
    (arg: T): T;
}

const myIdentity3: GenericIdentityFn<number> = identity;

// 泛型变量
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

// 泛型约束
interface Lengthwise {
    length: number;
}

function LoggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

LoggingIdentity2([1, 2, 3]);

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');

function create<T>(c: { new(): T }) {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class LionKeeper {
    nameTag: string;
}

class Animal {
    numLength: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: LionKeeper;
}

function createInstance<T extends Animal>(c: { new(): T }): T {
    return new c();
}

createInstance(Lion).keeper.nameTag = 'wang';
createInstance(Bee).keeper.hasMask = true;

// 泛型类型
class Generic<T> {
    value: T;
    add: (x: T, y: T) => T;
}

const myGenericNumber = new Generic<number>();
myGenericNumber.value = 1;
myGenericNumber.add = (x, y) => x + y;

const myGenericString = new Generic<string>();
myGenericString.value = '1';
myGenericString.add = (x, y) => x + y;

console.log(myGenericNumber.add(myGenericNumber.value, 2));
console.log(myGenericString.add(myGenericString.value, '2'));
