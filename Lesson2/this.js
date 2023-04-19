console.log(this) // window scope

const anyFunc = function() {
  console.log(this) // window scope || with 'use strict' will be undefined
}

anyFunc()

const obj = {
  message: 'hello',
  name: 'Sasha',
  counter: 5,

  greetings() {
    console.log(this); // obj scope
    console.log(this.message + this.name) // helloSasha
  },

  greetings2: () => {
    console.log(this); // window scope
    console.log(this.message + this.name) // undefined
  },

  greetings3() {
    let counter = 0;
    const newFunc = function() {
      console.log(this) // undefined scope
      console.log(counter) // 0
      console.log(this.counter); // 5
    }
    newFunc.bind(obj)();
  },

  greetings4: () => {
    console.log(this) // obj scope
    console.log(this.counter); // 5
  }
}

obj.greetings();
obj.greetings2();
obj.greetings3();
obj.greetings4.bind(obj)();


const obj2 = {
  name: 'Sasha',
}

const obj3 = {
  name: 'Misha'
}

const greetings = function() {
  console.log(this)
  console.log(this.name)
}

greetings.bind(obj2)()
greetings.bind(obj3)()
// #1 obj2 scope
// #2 hello