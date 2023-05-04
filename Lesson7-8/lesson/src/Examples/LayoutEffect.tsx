import { useLayoutEffect, useState, useEffect } from "react";

const LayoutEffect = () => {
  const [text, setText] = useState("Text");
  const [text2, setText2] = useState("Text");

  useEffect(() => {
    setText('Bye')
    return () => {
      console.log("unmount");
    };
  }, []);

  useLayoutEffect(() => {
    setText2('Bye')
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <div>{text}</div>
      <div>{text2}</div>
    </div>
  );
};

export default LayoutEffect;
