"use strict";

// Task-1
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
};

// 1
let list = Object.keys(subjects);
let listToStr = list.join(", ");

console.log(listToStr);

// 2
let sumStudents = 0;
let sumTeachers = 0;

for (let key in subjects) {
    sumStudents += subjects[key].students;
    sumTeachers += subjects[key].teachers;
};

console.log("Students: " + sumStudents);
console.log("Teachers: " + sumTeachers);
// optional
console.log("Total people: " + (sumStudents + sumTeachers));

// 3
let averStudents = 0;
let amountSubjects = Object.keys(subjects).length;

for (let key in subjects) {
    averStudents += subjects[key].students;
};

console.log(averStudents / amountSubjects);

// 4
const listSubjects = Object.keys(subjects);
const arrSubjects = listSubjects.map(subject => {
    return {
        subName: subject,
        students: subjects[subject].students,
        teachers: subjects[subject].teachers,
    };
});

console.log(arrSubjects);

// 5
const sortByTeachers = arrSubjects.slice(0);

sortByTeachers.sort((a,b) => b.teachers - a.teachers); 

console.log(sortByTeachers);

// Task-2
    // const log = () => {
    //     console.log(1) 
            // 1
    
    //     setTimeout(() => { console.log(2) }, 0)  
            // 2 - without delay but after sync code (async code)
    
    //     console.log(3)
            // 3
        
    //     new Promise(() => { console.log(4) })
            // nothing (syntax?)
        
    //     setTimeout(() => { console.log(5) }, 1000)
            // 5 - with delay 1 sec (async code)

    //     console.log(6)
            // 6

    //   }
    
    //   log()
        // 1
        // 3
        // 6
        // 2
        // 5

// Task-3
const findMinAndMax = (numbers) => {
    let arrNumbers = numbers.split(" ");
    let minValue = Math.min.apply(null, arrNumbers);
    let maxValue = Math.max.apply(null, arrNumbers);

    return [minValue, maxValue];
};

console.log(findMinAndMax("5 6 3 0 1 -100"));