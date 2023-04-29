// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы: 
//  1. Создать строку из имен пользователей через запятую 
//  2. Посчитать общее количество машин у пользователей 
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
var arrayUsers = users.map(function (user) { return user.name; });
var stringUsers = arrayUsers.join(', ');
console.log(stringUsers);
// 2 
var totalNumberCars = users.reduce(function (sum, user) { return sum + (user.cars ? user.cars.length : 0); }, 0);
console.log(totalNumberCars);
// 3  
var hasEducation = function (arr) {
    var filterHasEducation = arr.filter(function (edu) {
        return edu.hasEducation === true;
    });
    return filterHasEducation;
};
console.log(hasEducation(users));
// 4   
var hasAnimals = function (arr) {
    var filterHasAnimals = arr.filter(function (animal) {
        return animal.hasOwnProperty("animals");
    });
    return filterHasAnimals;
};
console.log(hasAnimals(users));
// 5 
var hasCars = function (arr) {
    var filterHasCars = arr.filter(function (car) {
        return car.hasOwnProperty("cars");
    });
    var arrayCars = filterHasCars.map(function (car) {
        return car.cars;
    });
    return arrayCars.join(",");
};
console.log(hasCars(users));
