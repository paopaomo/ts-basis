const x = [0, 1, null];

class Animal {
    numLegs: number;
}

class Bee extends Animal {

}

class Lion extends Animal {

}

const zoom: Animal[] = [new Bee(), new Lion()];

window.onmousedown = (mouseEvent: any) => {
    console.log(mouseEvent.clickTime);
};

function createZoo(): Animal[] {
    return [new Bee(), new Lion()];
}
