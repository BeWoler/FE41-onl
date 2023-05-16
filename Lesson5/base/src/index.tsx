import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const Context = React.createContext(' ');
root.render(
  <React.StrictMode>
    <Context.Provider value="light">
     <App/>
    </Context.Provider>
  </React.StrictMode>
);
export {Context}