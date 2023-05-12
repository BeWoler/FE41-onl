import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// React Router - библиотека для маршрутизации SPA приложения, SPA - Single Page Application
// MPA - Multi Page Application
// SSR - Server Side Rendering
// Nextjs - фреймворк над React, который использует SSR подход

// Установка библиотеки npm i react-router-dom
// 1. Обернуть всё приложение в BrowserRouter или HashRouter
// 2. Дальше вы можете использовать маршруты где угодно

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
