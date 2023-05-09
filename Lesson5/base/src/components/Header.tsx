import { IHeaderProps } from "../interface/header"
import './style/style.css'
import Title from "./Title";
import User from "./user";
import { Context } from "../index";
import { useContext, useEffect, useState } from "react";

const Header = (props: IHeaderProps) => {
    let ContextTheme: {theme?: string} = useContext(Context);
    const [ ThemeState, SetTheme ] = useState('light')
    useEffect(()=> {
        if(ThemeState === 'light'){
            SetTheme('dark')
        }
        else{
            SetTheme('light')
        }
        return(console.log('newTheme'))
    }, [ContextTheme.theme])
    return(
        <header className = {ThemeState}>
        {props.isAuth === true ? <User userName="spaceStylerr"/> : <Title title="Sign In"/>}
        </header>
    )
}

export default Header;
