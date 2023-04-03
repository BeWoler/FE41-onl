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
  
  log()




// 1, 3, 4, 6, 2, 5