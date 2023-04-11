// Установить тс с нуля (описание в index.ts)
// Протипизировать данные
// По возможности использовать интерфейсы при необходимости

// 1

// будем использовать интерфейс, у name будет тип строка, у  years – число.

interface IObj {
   name: string,
   years: number,
}

const obj: IObj = {
   name: "Any name",
   years: 20,
};

// 2

// типизируем как то, что должна возвращать функция, так и переменные, которые она принимает

const numSum = (a: number, b: number): number => {
   return a + b;
};

// 3

// наверное это тип never, функция никогда ничего не вернет. В нашем случае функция сама себя вызывает (рекурсия)

const anyFunc = (): never => {
   return anyFunc();
};

// 4

// типизируем массив, он будет содержать в себе только цифры

const newArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

// типизируем массив, тип tuple – котреж - строгая последовательность множества типов,  т.е. у нас у каждого элемента массива свой уникальный тип. В нашем случае число у 1-ого элемента массива, строка у второго и тип булеан у 3-го элемента. 

const diffArr: [number, string, Boolean] = [1, "Hello", true];

// будем использовать интерфейс, у id присвоим тип число, у  name будет тип строка, у  years – число.

interface IObjArr {
   id: number,
   name: string,
   years: number,
}

const objArr: IObjArr[] = [
   { id: 1, name: "Sasha", years: 30 },
   { id: 2, name: "Roma", years: 18 },
   { id: 3, name: "Misha", years: 23 },
];

// 5

interface IProducts {
   id: number,
   name: string,
   price: number,
   currency: string,
   ingredients: Array<string>,
   type: string,
   available: boolean,
}

const products: IProducts[]= [
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
