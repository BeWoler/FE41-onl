"use strict"
// Написать функцию, которая принимает на вход строку в виде чисел и возвращает минимальное и максимальное значение.

const findMinAndMax = (numbers) => {
    const arr = numbers.split(' ').map(Number); // берем строку и переделываем ее в массив из чисел [5, 6, 3, 0, 1, -100]
    const min = Math.min(...arr); // находим минимальное значение
    const max = Math.max(...arr); // находим максимальное значение
    return [min, max]; 
}



console.log(findMinAndMax('5 6 3 0 1 -100')) // [-100, 6]
