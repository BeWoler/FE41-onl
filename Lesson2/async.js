// #Promise
url = "https://jsonplaceholder.typicode.com/postss/1";
// const promise = new Promise((done, fail)=>{
//   XMLHttpRequest
//   // request ====> response | error
//   // под капотом done(response) | fail(error)
// })
// .then(response => )// обработка успешного ответа
// .catch(error )// обработка ошибки
// .finally( ) // выполнится независимо от ответа

// Fetch - обертка над промисами, которая всегда возращает промис (незаывисимо от ответа сервера)

function httpGet(url) {
  new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function () {
      if (this.status == 200) {
        console.log(this.response);
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        console.log('Error')
        reject(error);
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

httpGet("https://jsonplaceholder.typicode.com/posts/1");

const getPost = async() => {
  await fetch("https://jsonplaceholder.typicode.com/posts/1").then((data) => data.json()).then((data) => console.log(data))
  fetch("https://jsonplaceholder.typicode.com/posts/2").then((data) => data.json()).then((data) => console.log(data))
  fetch("https://jsonplaceholder.typicode.com/posts/3").then((data) => data.json()).then((data) => console.log(data))
}

const getPost2 = async() => {
  await fetch("https://jsonplaceholder.typicode.com/posts/1").then((data) => data.json()).then((data) => console.log(data))
  await fetch("https://jsonplaceholder.typicode.com/posts/2").then((data) => data.json()).then((data) => console.log(data))
  await fetch("https://jsonplaceholder.typicode.com/posts/3").then((data) => data.json()).then((data) => console.log(data))
}

getPost()
getPost2()