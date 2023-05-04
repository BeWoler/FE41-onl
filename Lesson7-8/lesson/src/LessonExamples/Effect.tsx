import React, { useEffect, useState } from "react";

const Effect = ({ id }: { id?: number }) => {
  const [text, setText] = useState<string>("text");
  const [response, setResponse] = useState();
  const [limit, setLimit] = useState(10);
  const [counter, setCounter] = useState(0);

  //ComponentDidMount
  //ComponentWillUnmount
  //ComponentDidUpdate & ComponentShouldUpdate

  // useEffect(() => {
  //   const timer = setTimeout(() => { setText(text + 'Hello')}, 3000)
  //   return () => {
  //     clearTimeout(timer);
  //   }
  // }, [text]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(counter)
  //   }, 2000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  // useEffect(() => {
  //   const res = fetch(`https://google.com/?limit=${limit}`)
  //     .then((data) => data.json())
  //     .then((data) => setResponse(response));
  //   console.log(123);
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, [limit]);

  // useEffect(() => {
  //   const time = setTimeout()
  //   const interval = setInterval()
  //   const div = document.querySelector('')?.addEventListener('scroll', () => {})
  //   return () => {
  //     div.removeListener('scroll', () => {})
  //     clearInterval(time)
  //     clearTimeout(time)
  //   }
  // }, [])

  // useEffect(() => {
  //   const div = document.querySelector('#root')
  //   const div2 = document.querySelector('#root')
  //   if(id === 0) {
  //     div2?.className = 'admin'
  //   }
  //   else {
  //     div2?.className = 'user'
  //   }
  // }, [])

  return (
    <div>
      <button onClick={() => setLimit(limit + 10)}>Increase limit</button>
      <div>{text}</div>
    </div>
  );
};

export default Effect;
