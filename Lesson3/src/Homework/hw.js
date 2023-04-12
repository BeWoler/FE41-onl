// Установить тс с нуля (описание в index.ts)
// Протипизировать данные
// По возможности использовать интерфейсы при необходимости
// 1
var obj = {
    name: "Any name",
    years: 20,
};
// 2
var numSum = function (a, b) {
    return a + b;
};
// 3
var anyFunc = function () {
    return anyFunc();
};
// 4
var newArr = [1, 2, 3, 4, 5, 6, 7, 8];
var diffArr = [1, "Hello", true];
var objArr = [
    { id: 1, name: "Sasha", years: 30 },
    { id: 2, name: "Roma", years: 18 },
    { id: 3, name: "Misha", years: 23 },
];
// 5
var products = [
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
