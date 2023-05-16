
import Header from "./components/Header";
import PostList from "./components/PostList";
import { useContext, useState } from "react";
import React from "react";
import './components/style/style.css'
import { Context } from ".";
let localStorageThemeUnsorted:any = localStorage.getItem('theme');
let localStorageTheme:any = localStorageThemeUnsorted.slice(1,-1);
const App = () => {
    const startTheme = useContext(Context)
    const [theme ,setTheme] = useState(startTheme)
    return(
        <div className={localStorageTheme}>
            <Header isAuth={true}/>
            <PostList/>
            <input type="button" className='themeButton' value={`theme: ${localStorageTheme}`} onClick={function(){if(theme === 'light'){
                setTheme('dark')
                localStorage.setItem('theme', JSON.stringify(theme))
                localStorageTheme = localStorage.getItem('theme')?.slice(1,-1);
                console.log(localStorageTheme);
            }
            else{
                setTheme('light')
                localStorage.setItem('theme', JSON.stringify(theme))
                localStorageTheme = localStorage.getItem('theme')?.slice(1,-1);
                console.log(localStorageTheme);
            }
            return(theme);
            }}/>
        </div>
    )
}
export default App
export {localStorageTheme}