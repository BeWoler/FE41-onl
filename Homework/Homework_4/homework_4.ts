// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

interface ICountries {
  country: string;
  abbreviation: string;
  city: string;
  currency_name: string;
  population: number;
}

const newCountries: ICountries[] = [
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

//  1. Создать строку из названий стран через запятую
const listOfNewCountries: string = newCountries
  .map((country) => country.country)
  .join(", ");
console.log(listOfNewCountries);

//  2. Посчитать общее количество людей в данном массиве стран.
const totalPopulation: number = newCountries.reduce(
  (sum, country) => sum + country.population,
  0
);
console.log(totalPopulation);

//  3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
const getSortedCountries = (array: ICountries[]) => {
  const listOfSortedCountries: string = array
    .map((country) => country.country)
    .sort()
    .join(", ");
  return listOfSortedCountries;
};
console.log(getSortedCountries(newCountries));

//  4. Получить массив валют.
const currencies: string[] = newCountries.map(
  (country) => country.currency_name
);
console.log(currencies);

//  5. Получить массив городов, отсортированных в алвавитном порядке.
const sortedCities: string[] = newCountries
  .map((country) => country.city)
  .sort();
console.log(sortedCities);

//  6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.
const getAveragePopulation = (array: ICountries[]) => {
  const totalPopulation: number = array.reduce(
    (sum, country) => sum + country.population,
    0
  );
  const averagePopulation = Math.round(totalPopulation / array.length);
  return averagePopulation;
};
console.log(getAveragePopulation(newCountries));
