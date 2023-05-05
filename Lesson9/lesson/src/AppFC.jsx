import React, { useContext } from "react";
import { AllContext } from "./index";

import "./App.css";

function AppFC() {
  const context = useContext(AllContext);
  return (
    <div className='App'>
      <div>{context.theme}</div>
      <div>{context.userId}</div>
    </div>
  );
}

export default AppFC;
