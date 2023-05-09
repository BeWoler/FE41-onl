import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import { theme } from "./App";
const Context = React.createContext({})
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider value={theme}>
     <App/>
    </Context.Provider>
  </React.StrictMode>
);

export {Context};
