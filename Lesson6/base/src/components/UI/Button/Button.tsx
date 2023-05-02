import React from "react";

interface IButtonProps {
  text: string;
  handler: () => void;
}

const Button = ({ text, handler }: IButtonProps) => {
  return <button onClick={handler}>{text}</button>;
};

export default Button;
