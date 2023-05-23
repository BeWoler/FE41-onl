import './App.css';
import { useCookies } from 'react-cookie';
import { ThemeContext } from '../../index';
import  { useContext, useEffect, useState } from "react";
import AppRouter from "../AppRouter/AppRouter";

function App() {

  const context = useContext(ThemeContext);

  const getTheme = () => {
    const purple = localStorage.getItem("theme")
    if (purple) {
      return JSON.parse(purple)
    } else {
      return false
    }
  }

  const [theme, setTheme] = useState(getTheme());

  const setPurpleTheme = () => {
    setTheme(!theme);

  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <div className={`app ${theme ? context.theme : ""}`}>
      <button className="app__button" onClick={setPurpleTheme}>Изменить тему</button> 
      <AppRouter />
    </div>
  );
}

export default App;
