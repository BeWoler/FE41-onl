import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { themeContext } from './context';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const ThemeContext = React.createContext({ theme: '' })

root.render(
  <ThemeContext.Provider value={themeContext}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContext.Provider>

);

