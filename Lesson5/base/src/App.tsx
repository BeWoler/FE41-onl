import { resourceLimits } from "worker_threads";
import Header from "./components/Header";
import Post from "./components/Post";
import PostList from "./components/PostList";
import { useContext, useState } from "react";
import React from "react";
import './components/style/style.css'
import { Sign } from "./components/Sign";
const Context = React.createContext('')
let theme:string = 'light';
let localStorageThemeUnsorted:any = localStorage.getItem('theme');
let localStorageTheme:any = localStorageThemeUnsorted.slice(1,-1);
const App = () => {
    const [theme ,setTheme] = useState('light')
    return(
        <Context.Provider value={theme}>
            <Sign/>
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
        </Context.Provider>
    )
}
export default App
export {Context}
export {localStorageTheme}