// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//  1. Создать строку из названий стран через запятую
//  2. Посчитать общее количество людей в данном массиве стран.
//  3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
//  4. Получить массив валют.
//  5. Получить массив городов, отсортированных в алвавитном порядке.
//  6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.
var countries = [
    {
        country: "United Arab Emirates",
        abbreviation: "AE",
        city: "Abu Dhabi",
        currency_name: "Arab Emirates Dirham",
        population: 9630959,
    },
    {
        country: "Poland",
        abbreviation: "PL",
        city: "Warszawa",
        currency_name: "Polish Zloty",
        population: 37974750,
    },
    {
        country: "Russian Federation",
        abbreviation: "RU",
        city: "Moscow",
        currency_name: "Russian Ruble",
        population: 144478050,
    },
];
// 1 
var stringCountrys = function (arr) {
    return arr.map(function (arr) { return arr.country; }).join(",");
};
console.log(stringCountrys(countries));
// 2
var totalPopulation = function (arr) {
    var sum = arr.reduce(function (sum, currValue) {
        return sum + currValue.population;
    }, 0);
    return sum;
};
console.log(totalPopulation(countries));
// 3
var sortedCountrys = function (arr) {
    return arr.map(function (item) { return item.country; }).sort();
};
console.log(sortedCountrys(countries));
// 4
var arrcurrencies = countries.map(function (item) { return item.currency_name; });
console.log(arrcurrencies);
// 5
var sortedCities = function (arr) {
    return arr.map(function (item) { return item.city; }).sort();
};
console.log(sortedCities(countries));
// 6 
var averageSum = totalPopulation(countries) / countries.length;
console.log(averageSum);
