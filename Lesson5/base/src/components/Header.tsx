import { IHeaderProps } from "../interface/header"
import './style/style.css'
import Title from "./Title";
import User from "./user";
import '../components/style/style.css'
import { localStorageTheme } from "../App";
import { Context } from "../App";
import { useContext } from "react";
const Header = (props: IHeaderProps) => {
    const ContextTheme = useContext(Context);
    return(
        <header className = {`${ContextTheme}__header`}>
        {props.isAuth === true ? <User userName="spaceStylerr"/> : <Title title="Sign In"/>}
        </header>
    )
}

export default Header;
