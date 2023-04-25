import { IHeaderProps } from "../interface/header"
import './style/style.css'
import Title from "./Title";
import User from "./user";

const header = (props: IHeaderProps) => {
    return(
        <header className="header">
        {props.isAuth === true ? <User userName="spaceStylerr"/> : <Title title="Sign In"/>}
        </header>
    )
}

export default header;