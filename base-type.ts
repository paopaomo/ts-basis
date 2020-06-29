// boolean
const isDone: boolean = false;

// number
const decLiteral: number = 20;
const hexLiteral: number = 0x14;
const binaryLiteral: number = 0b10100;
const octalLiteral: number = 0x24;

// string
const name: string = 'Zi Ye';
const age: number = 23;
const sentence: string = `Hello, my name is ${name}, I'll be ${age + 1} years old next month.`;

// array
const list1: number[] = [1, 2, 3];
const list2: Array<number> = [2, 3, 4];

// tuple
const x: [string, number] = ['Zi Ye', 2];
console.log(x[0].substring(0, 1));

// enum
enum Color {
    Red= 1  ,
    Green = 3 ,
    Blue = 5
}
const c: Color = Color.Blue;
console.log(c);
const colorName: string = Color[5];
console.log(colorName);

// any
let notSure: any = 4;
notSure = 'may be string instead';
notSure = true;

// void
function warnUser(): void {
    console.log('This is my warning message');
}

// undefined
const u1: undefined = undefined;
const u2: undefined = null;

// null
const n1: null = null;
const n2: null = undefined;

// never
function error(message: string): never {
    throw new Error(message);
}
function fail() {
    return error('something failed');
}
function infiniteLoop(): never {
    while(true) {

    }
}

// object
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

// assert
const someValue: any = 'This is a string';
const stringLength1: number = (<String>someValue).length;
const stringLength2: number = (someValue as string).length;

export {}
