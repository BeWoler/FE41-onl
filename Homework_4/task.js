// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы: 
//  1. Создать строку из названий стран через запятую 
//  2. Посчитать общее количество людей в данном массиве стран. 
//  3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию. 
//  4. Получить массив валют. 
//  5. Получить массив городов, отсортированных в алфавитном порядке. 
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
var arrayWithCountry = countries.map(function (country) { return country.country; });
var stringWithNameOfCountry = arrayWithCountry.join(', ');
console.log(stringWithNameOfCountry);
// 2 
var totalNumberOfPeople = 0;
for (var key in countries) {
    totalNumberOfPeople += countries[key].population;
}
console.log(totalNumberOfPeople);
// 3
var sortingCountryName = function (arr) {
    var sortedArr = arr.sort(function (a, b) {
        return a.country > b.country ? 1 : -1;
    });
    return sortedArr;
};
console.log(sortingCountryName(countries));
// 4 
var array = [];
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var currency = countries_1[_i];
    var currencyName = currency.currency_name;
    array.push(currencyName);
}
console.log(array);
// 5
var arrayCity = [];
for (var _a = 0, countries_2 = countries; _a < countries_2.length; _a++) {
    var city = countries_2[_a];
    var cityName = city.city;
    arrayCity.push(cityName);
}
console.log(arrayCity.sort());
// 6
var objectNumSum = function (arr) {
    var sum = arr.reduce(function (sum, currValue) {
        return sum + currValue.population;
    }, 0);
    return sum;
};
var averageSum = objectNumSum(countries) / countries.length;
console.log(averageSum.toFixed(2));
