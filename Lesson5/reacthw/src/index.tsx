import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { context } from './context';


export const ThemContext = React.createContext(context);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemContext.Provider value={context}>
    <App/>
    </ThemContext.Provider>
  </React.StrictMode>
);
