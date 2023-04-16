import { IUser } from "./interface/user.interface";
import './style/user.css'

const User = (props: IUser) => {
    return (
        <div className="user">{props.username}</div>
    )
}

export default User;
