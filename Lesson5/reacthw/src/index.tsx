import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import {
  themeContext,
  initialThemeContext,
  userContext,
  authContext,
} from "./Store/context";
import App from "./components/App/App";

export const AllContext = React.createContext({
  theme: {},
  user: {},
  auth: {},
});

export const ThemeContext = React.createContext(initialThemeContext);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContext.Provider value={themeContext}>
      <AllContext.Provider
        value={{
          theme: themeContext,
          user: userContext,
          auth: authContext,
        }}
      >
        <App />
      </AllContext.Provider>
    </ThemeContext.Provider>
  </React.StrictMode>
);
