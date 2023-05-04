import { useEffect, useState } from "react";

const Effect = () => {
  const [text, setText] = useState<string>("Mounted");

  useEffect(() => {
    console.log(text);
    return () => console.log("Unmounted");
  }, [text]);

  return (
    <div>
      useEffect example
      <div
        onClick={() => {
          setText("Updated");
        }}>
        {text}
      </div>
      <button
        onClick={() => {
          setText("Cleared and Updated");
        }}>
        Clear
      </button>
    </div>
  );
};

export default Effect;
