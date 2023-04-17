// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы: 
//  1. Создать строку из названий стран через запятую 
//  2. Посчитать общее количество людей в данном массиве стран. 
//  3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию. 
//  4. Получить массив валют. 
//  5. Получить массив городов, отсортированных в алфавитном порядке. 
//  6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах. 

interface ICountries {
   country: string;
   abbreviation: string;
   city: string;
   currency_name: string;
   population: number;
}

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

const arrayWithCountry: string[] = countries.map((country) => country.country)

const stringWithNameOfCountry: string = arrayWithCountry.join(', ')

console.log(stringWithNameOfCountry)


// 2 

let totalNumberOfPeople: number = 0;

for (let key in countries) {
   totalNumberOfPeople += countries[key].population;
}

console.log(totalNumberOfPeople);

// 3

const sortingCountryName = (arr: ICountries[]): ICountries[] => {
   const sortedArr: ICountries[] = arr.sort((a, b) => {
      return a.country > b.country ? 1 : -1
   });
   return sortedArr;
}

console.log(sortingCountryName(countries))

// 4 

const array: Array<string> = []

for (const currency of countries) {
   const currencyName: string = currency.currency_name;
   array.push(currencyName)
}

console.log(array)

// 5

const arrayCity: Array<string> = []

for (const city of countries) {
   const cityName: string = city.city;
   arrayCity.push(cityName)
}

console.log(arrayCity.sort())

// 6

const objectNumSum = (arr: ICountries[]): number => {
   const sum: number = arr.reduce((sum, currValue) => {
      return sum + currValue.population;
   }, 0);
   return sum;
}

const averageSum: number = objectNumSum(countries) / countries.length

console.log(averageSum.toFixed(2));


