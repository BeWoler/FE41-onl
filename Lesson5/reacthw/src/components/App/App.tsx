import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import SignForm from "../SignForm/SignForm";
import '../../';
import { ThemContext } from "../..";

function App() {
  const [pageForm, setPageForm] = useState<boolean>(false);

  const onClickChangeForm = () => {
    setPageForm(!pageForm);
  };

  const context = useContext(ThemContext);

  const getTheme = () => {
    const gray = localStorage.getItem("themeNow")
    if(gray) {
      return JSON.parse(gray)
    } else {
      return false
    }
  }

  const [theme, setTheme] = useState(getTheme());

  const setDarkTheme = () => {
    setTheme(!theme);
    
  };

  useEffect(() => {
    localStorage.setItem("themeNow", JSON.stringify(theme))
  }, [theme])
  

  return (
    <div className= {`layout ${ theme ? context.dark : ""}`} >
      {/* <Header isAuth = {true} />
      <MainPage/> */}
      <SignForm 
        handler={(e: any) => {
          e.preventDefault();
          onClickChangeForm();
        }}
        signIn={pageForm}
      />
      <button  onClick={setDarkTheme}>Change theme</button> 
    </div>
  );
}

export default App; 
