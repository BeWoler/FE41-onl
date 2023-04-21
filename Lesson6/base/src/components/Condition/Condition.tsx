import React from "react";
import User from "../User/User";
import Loader from "../Loader/Loader";

const Condition = ({ isAuth }: { isAuth: boolean }) => {
  if (!isAuth) {
    return <Loader />;
  }
  return (
    <div>
      <User age={20} name='Sasha' />
    </div>
  );
};

export default Condition;
