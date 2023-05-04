import { useId, useState } from "react";

const Uid = () => {
  const [counter, setCounter] = useState(0)
  const id = useId();

  return (
    <div>
      <div onClick={() => setCounter(counter + 1)}>{counter}</div>
      <div>{useId()}</div>
      <div>{id}</div>
    </div>
  );
};

export default Uid;
