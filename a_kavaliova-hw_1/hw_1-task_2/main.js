"use strict"
// Что выведет в консоль?

// Просьба подумать и сразу не запускать для проверки :)
// Ответ просто запишите комментарием под вызовом функции

const log = () => {
    console.log(1)
  
    setTimeout(() => { console.log(2) }, 0)
  
    console.log(3)
    
    new Promise(() => { console.log(4) })
    
    setTimeout(() => { console.log(5) }, 1000)
  
    console.log(6)
  }
  
  log();

   // решение:
  // сразу будет 1, 
  // таймаут в ноль миллисекунд: не понятно, является ли ноль миллисикунд задержкой времени, ведь это ноль, поэтому не знаю, пропустит ли строку с двойкой или выведет ее 
  // выведется 3,
  // что делает промис в данном случае - прошу пояснить (мне эта тема не понятна) т.е. выведется ли 4 вообще для меня загадка,
  // потом опять задержка в 1 секунду, значит выведется следующая строка с 6,
  // возвращаемся по очереди к первому таймауту и выводим 2,
  // выводим 5 в самом конце, потому что тут был самый долгий таймаут,
  

  // итог: 
  //1.
  //(возможно выведет 2 если ноль миллисекунд не считается задержкой времени) 
  //3. 
  //(?(4?) что длает тут промис не понимаю). 
  //6. 
  //2 (либо тут будет 2 если ноль миллисекунд это все-таки задержка времени).
  //5