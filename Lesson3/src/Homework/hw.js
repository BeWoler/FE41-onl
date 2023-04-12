"use strict";
// Установить тс с нуля (описание в index.ts)
// Протипизировать данные
// По возможности использовать интерфейсы при необходимости
// 1
const obj = {
    name: "Any name",
    years: 20,
};
// 2
const numSum = (a, b) => {
    return a + b;
};
// 3
const anyFunc = () => {
    return anyFunc();
};
// 4
const newArr = [1, 2, 3, 4, 5, 6, 7, 8];
const diffArr = [1, "Hello", true];
const objArr = [
    { id: 1, name: "Sasha", years: 30 },
    { id: 2, name: "Roma", years: 18 },
    { id: 3, name: "Misha", years: 23 },
];
// 5
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
