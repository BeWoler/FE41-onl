// 1
const subjects = {
    mathematics: {
      students: 200,
      teachers: 6,
    },
    biology: {
      students: 120,
      teachers: 6,
    },
    geography: {
      students: 60,
      teachers: 2,
    },
    chemistry: {
      students: 100,
      teachers: 3,
    },
  };
  
  // 1. Создать строку из названий предметов написаных через запятую
  const listOfSubjects = Object.keys(subjects).join(", ");
  console.log(listOfSubjects);
  
  // 2. Посчитать общее количнство студентов и учителей на всех предметах
  const objectToArray = Object.values(subjects);
  
  const numberOfStudents = (array) => {
    const sum = array.reduce((sum, currValue) => {
      return sum + currValue.students;
    }, 0);
    return sum;
  };
  
  const numberOfTeachers = (array) => {
    const sum = array.reduce((sum, currValue) => {
      return sum + currValue.teachers;
    }, 0);
    return sum;
  };
  
  const totalNumberOfStudents = numberOfStudents(objectToArray);
  const totalNumberOfTeachers = numberOfTeachers(objectToArray);
  
  console.log(
    `Total number of students: is ${totalNumberOfStudents} and total number of teachers is ${totalNumberOfTeachers}`
  );
  
  // 3. Получить среднее количество студентов на всех пердметах
  const averageNumberOfStudents = totalNumberOfStudents / objectToArray.length;
  console.log(averageNumberOfStudents);
  
  // 4. Создать массив из объектов предметов
  const objectArray = [];
  Object.keys(subjects).forEach((key) =>
    objectArray.push({
      subject: key,
      numberOfPeople: subjects[key],
    })
  );
  console.log(objectArray);
  
  // 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
  const sortedArray = objectArray.sort(
    (a, b) => b.numberOfPeople.teachers - a.numberOfPeople.teachers
  );
  console.log(sortedArray);
  
  // Second task
  // Что выведет в консоль?
  
  const log = () => {
    console.log(1);
  
    setTimeout(() => {
      console.log(2);
    }, 0);
  
    console.log(3);
  
    new Promise(() => {
      console.log(4);
    });
  
    setTimeout(() => {
      console.log(5);
    }, 1000);
  
    console.log(6);
  };
  
  log();
  // Answer: 1, 3, 4, 6, 2, 5
  
  // Third task
  // Написать функцию, которая принимает на вход строку в виде чисел и возвращает минимальное и максимальное значение.
  const findMinAndMax = (numbers) => {
    const numArray = numbers.split(" ");
    const minNumber = Math.min(...numArray);
    const maxNumber = Math.max(...numArray);
    return `max number is ${maxNumber}, min number is ${minNumber} `;
  };
  findMinAndMax("5 6 3 0 1 -100");
  console.log(findMinAndMax("5 6 3 0 1 -100")); // должен вывести -100 и 6