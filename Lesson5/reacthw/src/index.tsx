import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { context } from './context';
import { BrowserRouter } from 'react-router-dom';


export const ThemContext = React.createContext(context);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemContext.Provider value={context}>
      <App/>
      </ThemContext.Provider>
    </React.StrictMode>
  </BrowserRouter>
);
