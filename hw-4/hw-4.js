;
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
var names = users.map(function (person) { return person.name; });
var namesStr = names.join(", ");
console.log(namesStr);
// 2
var amountCars = users.reduce(function (sum, person) { return sum + (person.cars ? person.cars.length : 0); }, 0);
console.log(amountCars);
// 3
var personsHasEdu = users.filter(function (person) { return person.hasEducation === true; });
console.log(personsHasEdu);
// 4
var personsHasAnimals = users.filter(function (person) { return person.hasOwnProperty("animals"); });
console.log(personsHasAnimals);
// 5
var personsHasCars = users.filter(function (person) { return person.hasOwnProperty("cars"); });
var arrCars = personsHasCars.map(function (person) { return person.cars; });
var strCars = arrCars.join(",");
console.log(strCars);
;
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
var country = countries.map(function (el) { return el.country; });
var strCountries = country.join(", ");
console.log(strCountries);
// 2
var sumPopulation = 0;
countries.forEach(function (el) { return sumPopulation += el.population; });
console.log(sumPopulation);
// 3
var copyCountriesArr = countries.slice(0); // clone arr for save original sort
var sortCountryByName = copyCountriesArr.sort(function (a, b) { return a.country > b.country ? 1 : -1; });
console.log(sortCountryByName);
// 4
var currencyArr = countries.map(function (el) { return el.currency_name; });
console.log(currencyArr);
// 5
var cityArr = countries.map(function (el) { return el.city; });
var copyCityArr = cityArr.slice(0); // clone arr for save original sort
var cityArrSortByName = copyCityArr.sort(function (a, b) { return a > b ? 1 : -1; });
console.log(cityArrSortByName);
// 6
var amountCountries = countries.length;
var averPopulation = sumPopulation / amountCountries; // sumPopulation get from task 2.2
console.log(Math.round(averPopulation));
