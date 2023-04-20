// task-1
interface IObj {
    name: string,
    years: number,
}

const obj = {
    name: "Any name",
    years: 20,
};

// task-2
const numSum = (a: number, b: number): number => {
    return a + b;
};

// task-3
const anyFunc = (): never => {
    return anyFunc();
};

// task-4
const newArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

const diffArr: [number, string, boolean] = [1, "Hello", true];

interface IObjArr {
    id: number,
    name: string,
    years: number,
};

const objArr: IObjArr[] = [
    { 
        id: 1, 
        name: "Sasha", 
        years: 30,
    },{ 
        id: 2, 
        name: "Roma", 
        years: 18,
    },{ 
        id: 3, 
        name: "Misha", 
        years: 23,
    },
];

// task-5
interface IProduct {
    id: number,
    name: string,
    price: number,
    currency: string,
    ingredients: string[],
    type: string,
    available: boolean,
};

const products: IProduct[] = [
    {
        id: 1,
        name: "Burger Premium",
        price: 6,
        currency: "euro",
        ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
        type: "burger",
        available: true,
    },{
        id: 2,
        name: "Burger Lite",
        price: 2,
        currency: "euro",
        ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
        type: "burger",
        available: true,
    },
];