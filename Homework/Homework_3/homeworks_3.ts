// 1

interface IObject {
  name: string;
  years: number;
}

const object: IObject = {
  name: "Any name",
  years: 20,
};

// 2

const numberSum = (a: number, b: number): number => {
  return a + b;
};

// 3

const anyFunction = (): never => {
  return anyFunction();
};

// 4

const newArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

const diffArray: (number | string | boolean)[] = [1, "Hello", true];

interface IObjectArray {
  id: number;
  name: string;
  years: number
}

const objArray: IObjectArray[] = [
  { id: 1, name: "Sasha", years: 30 },
  { id: 2, name: "Roma", years: 18 },
  { id: 3, name: "Misha", years: 23 },
];

// 5

interface IProducts {
  id: number;
  name: string;
  price: number;
  currency: string;
  ingredients: string[];
  type: string;
  available: boolean;
}

const productsObject: IProducts[] = [
  {
    id: 1,
    name: "Burger Premium",
    price: 6,
    currency: "euro",
    ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
    type: "burger",
    available: true,
  },
  {
    id: 2,
    name: "Burger Lite",
    price: 2,
    currency: "euro",
    ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
    type: "burger",
    available: true,
  },
];
