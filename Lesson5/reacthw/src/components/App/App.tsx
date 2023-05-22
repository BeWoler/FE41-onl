import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import SignForm from "../SignForm/SignForm";
import '../../';
import { ThemContext } from "../..";
import { Route, Routes } from "react-router-dom";
import Nav from "../Nav/Nav";
import PostItem from "../PostItem/PostItem";
import PostsPage from "../PostsPage/PostsPage";

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
      <Nav/>
      <Routes>
        <Route path="/header" element={<Header isAuth = {true} />}/>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/posts">
          <Route index element={<PostsPage />} />
          <Route path=':id' element={<PostItem />} />
        </Route> 
        <Route path="/form" element={<SignForm 
          handler={(e: any) => {
            e.preventDefault();
            onClickChangeForm();
          }}
          signIn={pageForm}
        />}/>
        <Route path='*' element={<div>404 - Not Found</div>} />
      </Routes>
      <button  onClick={setDarkTheme}>Change theme</button>
    </div>
  );
}

export default App; 
