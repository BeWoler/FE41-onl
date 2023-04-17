// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//  1. Создать строку из имен пользователей через запятую
//  2. Посчитать общее количнство машин у пользователей
//  3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//  4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//  5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
var users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true,
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true,
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false,
    },
];
// 1
var stringNames = function (arr) {
    return arr.map(function (arr) { return arr.name; }).join(",");
};
console.log(stringNames(users));
// 2 
var totalCars = function (arr) {
    var sum = arr.reduce(function (sum, currValue) {
        return sum + (currValue.cars ? currValue.cars.length : 0);
    }, 0);
    return sum;
};
console.log(totalCars(users));
// 3
var userIsEducated = function (arr) {
    return arr.filter(function (arr) { return arr.hasEducation; });
};
console.log(userIsEducated(users));
// 4
var userHasAnimals = function (arr) {
    return arr.filter(function (arr) { return arr.animals; });
};
console.log(userHasAnimals(users));
// 5
var car = function (arr) {
    var sort = arr.filter(function (arr) { return arr.cars; });
    return sort.map(function (sort) { return sort.cars; }).join(",");
};
console.log(car(users));
