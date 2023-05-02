import React from "react";

interface IUserProps {
  name: string;
  age: number;
}

const User = ({ name, age }: IUserProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>{age}</div>
    </div>
  );
};

export default User;
