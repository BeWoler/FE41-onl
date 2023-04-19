const addCount = () => {
  let count = 0;
  return () => {
    count++
    console.log(count)
  }
}

const firstCount = addCount();

firstCount() // 1
firstCount() // 2

//////////////////////////////////

const addNum = (num) => {
  return (num2) => {
    console.log(num + num2)
  }
}

const add5 = addNum(2);
const addNumber = addNum(10)

add5(5) // 7
add5(4) // 6
addNumber(10) // 20

const addPathToUrl = (url) => {
  return (path) => {
    console.log(`${url}/${path}`)
  }
}

const page = addPathToUrl('https://google.com')
page('main') // https://google.com/main
page('contact') // https://google.com/contact