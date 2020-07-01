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

// this
interface Card {
    suit: string;
    card: number
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card
}

const deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: new Array(52),
    createCardPicker: function(this: Deck) {
        return () => {
            const pickedCard = Math.floor(Math.random() * 52);
            const pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            }
        }
    }
};

const cardPicker = deck.createCardPicker();
const pickedCard = cardPicker();

console.log(`Card: ${pickedCard.card} of ${pickedCard.suit}`);

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    type: string;

    onClickBad = (e: Event) => {
        this.type = e.type;
    }
}

const handler = new Handler();
const uiElement: UIElement = {
    addClickListener() {}
};

uiElement.addClickListener(handler.onClickBad);
