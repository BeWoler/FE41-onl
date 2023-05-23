import { useContext, useState } from "react";
import React from "react";
import '../components/style/style.css'
import { Link } from "react-router-dom";
const Context = React.createContext('')
let theme:string = 'light';
let localStorageThemeUnsorted:any = localStorage.getItem('theme');
let localStorageTheme:any = localStorageThemeUnsorted.slice(1,-1);
const MainPage = () => {
    const [theme ,setTheme] = useState('light')
    return(
        <Context.Provider value={theme}>
        <div className={`${localStorageTheme} mainpage__div`}>
        <Link to="/posts"><button className="linkToPosts">Posts</button></Link>
       <Link to="/sign"><button className="linkToPosts">Sign</button></Link>
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
export default MainPage
export {Context}
export {localStorageTheme}