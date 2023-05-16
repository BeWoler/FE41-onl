import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import "./index.css";
import { themeContext } from './context/index';

export const ThemeContext = React.createContext(themeContext);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContext.Provider value={themeContext}>
    <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);


