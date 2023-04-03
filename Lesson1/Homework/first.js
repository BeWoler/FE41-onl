// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количнство студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех пердметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
  mathematics: {
      students: 200,
      teachers: 6
  },
  biology: {
      students: 120,
      teachers: 6
  },
  geography: {
      students: 60,
      teachers: 2
  },
  chemistry: {
      students: 100,
      teachers: 3
  }
}

// #1

const subjectsKeys = Object.keys(subjects);
console.log(subjectsKeys);
const subjectsToString = String(subjectsKeys)

console.log(subjectsToString);

// #2

const objectToArray = Object.values(subjects);
console.log(objectToArray);

const numStudents = (arr) => {
    const sum = arr.reduce((sum, currValue) => {
      return sum + currValue.students;
    }, 0);
    return sum;
}

const numTeachers = (arr) => {
    const sum = arr.reduce((sum, currValue) => {
      return sum + currValue.teachers;
    }, 0);
    return sum;
}

const totalNumStudents = numStudents(objectToArray);
const totalNumTeachers = numTeachers(objectToArray);

console.log("Студентов:", totalNumStudents);
console.log("Учителей:", totalNumTeachers);

// #3

const averageStudents = totalNumStudents / objectToArray.length;

console.log(averageStudents);

  // #5


const sortedTeachers = objectToArray.sort((a, b) => b.teachers - a.teachers);
  console.log(sortedTeachers);

