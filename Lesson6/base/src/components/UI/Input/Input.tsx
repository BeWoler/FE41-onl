import React from "react";

interface IInputProps {
  type: string;
  placeholder: string;
  value: any;
  handler: (e: any) => void;
}

const Input = ({ type, placeholder, value, handler }: IInputProps) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={handler} />;
};

export default Input;
