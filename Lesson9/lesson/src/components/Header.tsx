import React, { createRef, useContext } from "react";
import { AllContext } from "..";
import { IContext } from "../store/context.interface";

const Header = () => {
  const context: IContext = useContext<any>(AllContext);

  return <div>{context.theme.theme}</div>;
};

export default Header;
