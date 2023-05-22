// Установить тс с нуля (описание в index.ts)
// Протипизировать данные
// По возможности использовать интерфейсы при необходимости

// 1

interface IObj {
    name: string,
    yers: number,
}

const obj: IObj = {
    name: "Any name",
    years: 20,
  };
  
  // 2
  
  const numSum = (a: number, b: number): number => {
    return a + b;
  };
  
  // 3
  
  const anyFunc = (): never => {
    return anyFunc();
  };
  
  // 4
  
  const newArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  
  const diffArr: (string | number | boolean)[] = [1, "Hello", true];

  interface IObjArr {
    id: number,
    name: string,
    yers: number,
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
    ingredients: string[],
    type: string,
    available: boolean,
  }

  const products: IProducts[] = [
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