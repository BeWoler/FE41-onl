import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ to }: { to?: string }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        !to && console.log("Pushed");
        to && navigate(to);
      }}>
      {to ? `To ${to}` : "Just push me!"}
    </button>
  );
};

export default Button;
