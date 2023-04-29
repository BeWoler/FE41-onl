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
//1 task
var countriesNames = [];
var i = 0;
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var item = countries_1[_i];
    countriesNames[i] = item.country;
    i++;
}
var countriesNamesString = countriesNames.join();
console.log(countriesNamesString);
//2 task
var allPopulation = 0;
for (var _a = 0, countries_2 = countries; _a < countries_2.length; _a++) {
    var item = countries_2[_a];
    allPopulation += item.population;
}
console.log(allPopulation);
//task 3
var sortFunction = function (countries) {
    console.log(countries.sort());
    return countries.sort();
};
sortFunction(countriesNames);
//task 4
var i2 = 0;
var currencyName = [];
for (var _b = 0, countries_3 = countries; _b < countries_3.length; _b++) {
    var item = countries_3[_b];
    currencyName[i2] = "".concat(item.country, ": ").concat(item.currency_name);
    i2++;
}
console.log(currencyName);
//5
var i3 = 0;
var cities = [];
for (var _c = 0, countries_4 = countries; _c < countries_4.length; _c++) {
    var item = countries_4[_c];
    cities[i3] = item.city;
    i3++;
}
var sortedCities = cities.sort();
console.log(sortedCities);
//6
var averageAmount = function (countries) {
    var sum = 0;
    for (var _i = 0, countries_5 = countries; _i < countries_5.length; _i++) {
        var item = countries_5[_i];
        sum += item.population;
    }
    console.log(sum / countries.length);
    return sum / countries.length;
};
averageAmount(countries);
