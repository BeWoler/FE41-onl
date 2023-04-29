// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//  1. Создать строку из названий стран через запятую
//  2. Посчитать общее количество людей в данном массиве стран.
//  3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
//  4. Получить массив валют.
//  5. Получить массив городов, отсортированных в алвавитном порядке.
//  6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

const countries:
({country: string,
  abbreviation: string,
  city: string,
  currency_name: string,
  population: number,
})[] = [
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
const countriesNames: string[] = [];
let i:number = 0;
for(let item of countries){
  countriesNames[i] = item.country;
  i++;
}
const countriesNamesString:string = countriesNames.join();
console.log(countriesNamesString);

//2 task
let allPopulation:number = 0;
for(let item of countries){
  allPopulation+= item.population;
}
console.log(allPopulation);

//task 3
const sortFunction = (countries:string[]):string[] => {
  console.log(countries.sort())
  return countries.sort()
}
sortFunction(countriesNames);

//task 4
let i2:number = 0;
const currencyName:string[] = [];
for(let item of countries){
  currencyName[i2] = `${item.country}: ${item.currency_name}`;
  i2++;
}
console.log(currencyName);

//5
let i3:number = 0;
let cities:string[] = []
for(let item of countries){
  cities[i3] = item.city;
  i3++
}
const sortedCities:string[] = cities.sort();
console.log(sortedCities);

//6
const averageAmount = (countries:({
  country: string,
  abbreviation: string,
  city: string,
  currency_name: string,
  population: number,
})[]):number => {
  let sum:number = 0;
  for(let item of countries){
    sum+= item.population;
  }
  console.log(sum / countries.length);
  return sum / countries.length;
}
averageAmount(countries);
