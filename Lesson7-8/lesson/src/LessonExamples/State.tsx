import { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState<number>(0);
  const [text] = useState("Hello");
  const [userObj, setUserObj] = useState<{ name: string; age: number }>({
    name: "Sasha",
    age: 20,
  });

  return (
    <div>
      <div>{text}</div>
      <div onClick={() => setCounter(counter + 1)}>Increment</div>
      <div onClick={() => setCounter(counter - 1)}>Decrement</div>
      <div>{counter}</div>

      <button
        onClick={() => {
          return setUserObj({ ...userObj, name: "Any name" });
        }}>
        Change name
      </button>
      <button
        onClick={() => {
          return setUserObj({ ...userObj, age: 30 });
        }}>
        Change age
      </button>
      <pre>{JSON.stringify(userObj, null)}</pre>
    </div>
  );
};

export default State;
