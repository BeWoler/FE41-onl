import Title from "../Title/Title";
import User from "../User/User";
import { IHeader } from "./interface/header.interface";

const Header = (props: IHeader) => {
    return (

        <header >
            {props.isAuth === false ? <User username="Karina" /> : <Title content="Sign In" />}
        </header>




    )
}

export default Header;