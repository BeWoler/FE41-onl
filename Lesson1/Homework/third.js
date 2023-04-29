// Написать функцию, которая принимает на вход строку в виде чисел и возвращает минимальное и максимальное значение.

const findMinAndMax = (numbers) => {
    const numberArray = numbers.split(' ')
    numberArray.sort();
    return(`минимальное число ${numberArray[0]}, максимальное число ${numberArray.pop()}`);
}

findMinAndMax('5 6 3 0 1 -100')

console.log(findMinAndMax('5 6 3 0 1 -100')) // должен вывести -100 и 6