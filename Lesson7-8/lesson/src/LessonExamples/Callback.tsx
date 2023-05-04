import { useCallback, useEffect, useState } from "react";

const Callback = () => {
  const [message, setMessage] = useState("Hello");
  const [counter, setCounter] = useState(0);

  // const greeting = (text: string) => {
  //   console.log(text);
  // };

  const greeting = useCallback((text: string) => {
    console.log(text)
  }, []);

  useEffect(() => {
    greeting(message);
  }, [greeting, message]);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setMessage(message + "bye")}>Greet func</button>
    </div>
  );
};

export default Callback;
