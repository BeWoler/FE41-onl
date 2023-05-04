import { useMemo, useState, useId } from "react";

const Memo = () => {
  const [update, setUpdate] = useState<boolean>(false);
  const [arr, setArr] = useState<Array<number>>([1]);

  const id = useId();

  const sortArr = (arr: Array<number>) => {
    console.log("sort");
    return arr.sort((a, b) => a - b);
  };

  // const sortedArr = sortArr(arr);
  const sortedMemoArr = useMemo(() => sortArr(arr), [arr]);

  return (
    <div>
      {sortedMemoArr?.map((item) => {
        return <div key={id}>{item}</div>;
      })}
      <button onClick={() => setUpdate(!update)}>Update</button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setArr([...arr, arr.push(arr[arr.length - 1] + 1)]);
          console.log(arr);
        }}>
        Change Arr
      </button>
    </div>
  );
};

export default Memo;
