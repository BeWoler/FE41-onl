import { IHeaderProps } from "../interface/header"
import './style/style.css'
import Title from "./Title";
import User from "./user";
import '../components/style/style.css'
import { localStorageTheme } from "../App";

const Header = (props: IHeaderProps) => {
    return(
        <header className = {`${localStorageTheme}__header`}>
        {props.isAuth === true ? <User userName="spaceStylerr"/> : <Title title="Sign In"/>}
        </header>
    )
}

export default Header;
