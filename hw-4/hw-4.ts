// task-1
interface IUser {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean,
};

const users: IUser[] = [
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
const names: string[] = users.map(person => person.name);
const namesStr = names.join(", ");
console.log(namesStr);
  
// 2
const amountCars: number = users.reduce((sum, person) => sum + (person.cars ? person.cars.length : 0), 0);
console.log(amountCars);

// 3
const personsHasEdu: IUser[] = users.filter(person => person.hasEducation === true);
console.log(personsHasEdu);

// 4
const personsHasAnimals: IUser[] = users.filter(person => person.hasOwnProperty("animals"));
console.log(personsHasAnimals);

// 5
const personsHasCars: IUser[] = users.filter(person => person.hasOwnProperty("cars"));
const arrCars = personsHasCars.map(person => person.cars);
const strCars = arrCars.join(",");
console.log(strCars);

// task-2

// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//  1. Создать строку из названий стран через запятую
//  2. Посчитать общее количество людей в данном массиве стран.
//  3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
//  4. Получить массив валют.
//  5. Получить массив городов, отсортированных в алвавитном порядке.
//  6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.
interface ICountries {
    country: string,
    abbreviation: string,
    city: string,
    currency_name: string,
    population: number,
};

const countries: ICountries[] = [
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
const country: string[] = countries.map(el => el.country);
const strCountries = country.join(", ");
console.log(strCountries);

// 2
let sumPopulation: number = 0;
countries.forEach(el => sumPopulation += el.population);
console.log(sumPopulation);

// 3
const copyCountriesArr = countries.slice(0); // clone arr for save original sort
const sortCountryByName: ICountries[] = copyCountriesArr.sort((a, b) => a.country > b.country ? 1 : -1);
console.log(sortCountryByName);

// 4
const currencyArr: string[] = countries.map(el => el.currency_name);
console.log(currencyArr);

// 5
const cityArr: string[] = countries.map(el => el.city);
const copyCityArr = cityArr.slice(0); // clone arr for save original sort
const cityArrSortByName: string[] = copyCityArr.sort((a, b) => a > b ? 1 : -1);
console.log(cityArrSortByName);

// 6
const amountCountries: number = countries.length;
const averPopulation: number = sumPopulation / amountCountries; // sumPopulation get from task 2.2
console.log(Math.round(averPopulation));