"use strict";
// Установить тс с нуля (описание в index.ts)
// Протипизировать данные
// По возможности использовать интерфейсы при необходимости
const obj = {
    name: "Any name",
    years: 20,
};
// 2
// типизируем как то, что должна возвращать функция, так и переменные, которые она принимает
const numSum = (a, b) => {
    return a + b;
};
// 3
// наверное это тип never, функция никогда ничего не вернет. В нашем случае функция сама себя вызывает (рекурсия)
const anyFunc = () => {
    return anyFunc();
};
// 4
// типизируем массив, он будет содержать в себе только цифры
const newArr = [1, 2, 3, 4, 5, 6, 7, 8];
// типизируем массив, тип tuple – котреж - строгая последовательность множества типов,  т.е. у нас у каждого элемента массива свой уникальный. В нашем случае число у 1-ого элемента массива, строка у второго и тип булеан у 3-го элемента. 
const diffArr = [1, "Hello", true];
const objArr = [
    { id: 1, name: "Sasha", years: 30 },
    { id: 2, name: "Roma", years: 18 },
    { id: 3, name: "Misha", years: 23 },
];
const products = [
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
