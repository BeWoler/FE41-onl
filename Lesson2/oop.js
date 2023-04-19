class Audi {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  getCar() {
    console.log(`${this.name} with ${this.wheels} wheels`)
  }
}

const audiA4 = new Audi('A4', 4);
console.log(audiA4.name) // A4
console.log(audiA4.wheels) // 4
audiA4.getCar() // A4 with 4 wheels

class Car {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels; 
  }

  getCar() {
    console.log(`${this.name} with ${this.wheels} wheels`)
  }

  // other methods...
}

// Наследование

class TruckCar extends Car {
  constructor(name, wheels) {
    super(name); // from parent class
    this.wheels = wheels; // own constructor
  }
}

const newTruck = new TruckCar('A10', 6);
// Полиморфизм    |
newTruck.getCar()
// Полиморфизм    |


// Инкапсуляция

class Book {
  constructor(author, name) {
    this.author = author;
    this.name = name;
  }

  #getBook() {
    console.log(`${this.name} from ${this.author}`);
  }

  get getBookWithAuthor() {
    return this.#getBook
  }
}

const king = new Book('King', 'Dead Zone');
king.#getBook(); // error
king.getBookWithAuthor() // Dead Zone from King
