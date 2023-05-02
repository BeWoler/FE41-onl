import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import AppClass from './components/App/AppClass';
import App from "./components/App/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <AppClass /> */}
    <App />
  </React.StrictMode>
);
