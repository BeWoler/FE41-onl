import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import "./index.css";
import { themeContext } from './context/index';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from "react-router-dom";

export const ThemeContext = React.createContext(themeContext);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CookiesProvider>
        <ThemeContext.Provider value={themeContext}>
          <App />
        </ThemeContext.Provider>
      </CookiesProvider>
    </React.StrictMode>
  </BrowserRouter>
);


