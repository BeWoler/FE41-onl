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

// Task 1

const subjectsKeys = Object.keys(subjects); // (4) ['mathematics', 'biology', 'geography', 'chemistry']

const subjectsNamesString = `Subjects names are: ${subjectsKeys.join(', ')}`; // Subjects names are: mathematics, biology, geography, chemistry

// Task 2

const subjectsValues = Object.values(subjects);  // (4) [{…}, {…}, {…}, {…}]

let commonPeopleNumber = 0;

subjectsValues.forEach(subj => {
    commonPeopleNumber = commonPeopleNumber + subj.students + subj.teachers
}); // 497

// Task 3

let commonStudentNumber = 0;

subjectsValues.forEach(subj => {
    commonStudentNumber += subj.students;
})

const averageStudentsNumber = commonStudentNumber / subjectsValues.length; // 120

// Task 4

const subjectsNames = Object.keys(subjects); // (4) ['mathematics', 'biology', 'geography', 'chemistry']
const subjectsObjToArr = subjectsNames.map((subject) => {
    return {
        name: subject,
        students: subjects[subject].students,
        teachers: subjects[subject].teachers
    };
});

subjectsObjToArr;  
// [{…}, {…}, {…}, {…}]
// 0: {name: 'mathematics', students: 200, teachers: 6}
// 1: {name: 'biology', students: 120, teachers: 6}
// 2: {name: 'geography',     students: 60, teachers: 2}
// 3: {name: 'chemistry', students: 100, teachers: 3}


// Task 5

const sortedByTeachers = subjectsObjToArr.sort((a, b) => b.teachers - a.teachers);

sortedByTeachers; 
// [{…}, {…}, {…}, {…}]
// 0: {name: 'mathematics', students: 200, teachers: 6}
// 1: {name: 'biology', students: 120, teachers: 6}
// 2: {name: 'chemistry', students: 100, teachers: 3}
// 3: {name: 'geography', students: 60, teachers: 2}