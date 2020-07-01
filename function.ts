const add = (x: number, y: number): number => {
    return x + y;
};

add(1, 1);

// 可选参数, 默认参数
const buildName = (firstName = 'Will', lastName?: string): string => {
    if(lastName) {
        return `${firstName} ${lastName}`;
    }
    return firstName;
};

const result1 = buildName('Zi', 'Ye');
const result2 = buildName(undefined, 'Adams');
const result3 = buildName();
