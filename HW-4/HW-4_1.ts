// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//  1. Создать строку из названий стран через запятую
//  2. Посчитать общее количество людей в данном массиве стран.
//  3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
//  4. Получить массив валют.
//  5. Получить массив городов, отсортированных в алвавитном порядке.
//  6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.


interface ICountry {
    country:string;
    abbreviation:string;
    city:string;
    currency_name:string;
    population:number;
  }

const countries: ICountry[] = [
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

  const stringCountrys = (arr:ICountry[]):string => {
    return arr.map(arr => arr.country ).join(",");
 }

 console.log(stringCountrys(countries));


 // 2

 const totalPopulation = (arr:ICountry[]):number => {
    const sum = arr.reduce((sum, currValue) => {
        return sum + currValue.population
    }, 0);
    return sum
  }
  
  console.log(totalPopulation(countries));

// 3

const sortedCountrys = (arr:ICountry[]):string[] => {
    return arr.map(item => item.country).sort();
}

console.log(sortedCountrys(countries));

// 4
const arrcurrencies: string[] = countries.map(item => item.currency_name);

console.log(arrcurrencies);

// 5

const sortedCities = (arr:ICountry[]):string[] => {
    return arr.map(item => item.city).sort();
}

console.log(sortedCities(countries));

// 6 

const averageSum:number = totalPopulation(countries) / countries.length;

console.log(averageSum);