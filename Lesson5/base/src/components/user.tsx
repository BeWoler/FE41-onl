import userEvent from "@testing-library/user-event";
import { IUserProps } from "../interface/user";
import "./style/style.css"

const User = (props:IUserProps) => {
    return(
    <p className="header__User">{props.userName}</p>
    )
}
export default User;