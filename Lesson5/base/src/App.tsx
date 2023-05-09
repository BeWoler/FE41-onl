import { resourceLimits } from "worker_threads";
import Header from "./components/Header";
import Post from "./components/Post";
import PostList from "./components/PostList";
import { useState } from "react";
let theme:string = 'light';
export {theme}
const App = () => {
    return(
        <div>
            <Header isAuth={true}/>
            <PostList/>
            <input type="button" value='Theme' onClick={function(){if(theme === 'light'){
                theme = 'dark'
            }
            else{
               theme = 'light'
            }
            return(console.log(theme));
            }}/>
        </div>
    )
}
export default App
