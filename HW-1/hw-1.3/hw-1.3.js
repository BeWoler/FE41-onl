'use strict'

// Написать функцию, которая принимает на вход строку в виде чисел и возвращает минимальное и максимальное значение.

const findMinAndMax = (str) => {
    const numbers = str.split(' ')
    return {
      min: Math.min(...numbers),
      max: Math.max(...numbers)
    }
}

findMinAndMax('5 6 3 0 1 -100')

console.log(findMinAndMax('5 6 3 0 1 -100')) // должен вывести -100 и 6