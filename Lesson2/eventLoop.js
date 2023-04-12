console.log(1) // ---> queue --->

setTimeout(() => { console.log(2)}, 0) // ---> queue |

console.log(3) // ---> queue --->

setTimeout(() => { console.log(4)}, 1000) // ---> queue |

console.log(5) // ---> queue --->

// 1 3 5 2 4

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);

new Promise(() => {
  setTimeout(() => {
    console.log(5);
  }, 0);
});

setTimeout(() => {
  console.log(6);
}, 1000);

console.log(7);

new Promise((resolve, reject) => resolve()).then(() => console.log(8)); // Microtask |

setTimeout(() => {
  console.log(9);
});

console.log(10);

new Promise((resolve) => resolve()).then(() =>
  setTimeout(() => {
    console.log(11);
  }, 0)
);

// Task > Micro > Macro

// 1 4 7 10 8 2 3 5 9 11 6 // Correct