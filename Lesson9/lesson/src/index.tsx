import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  themeContext,
  initialThemeContext,
  userContext,
  authContext,
} from "./store/context";
import App from "./App";

// Инициализировать сам контекст, например const UserContext = React.cretaeContext({});
// Подключить провайдер и передать данные в контекст, например <UserContext.Provider value={user}><App /></UserContext.Provider
// Получить данные контекста внутри компонентов, импортировать хук useContext, импортировать сам UserContext, использовать хук, например const context = useContext(UserContext);

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
          auth: authContext,
          user: userContext,
        }}>
        <App />
      </AllContext.Provider>
    </ThemeContext.Provider>
  </React.StrictMode>
);
