import { IUserProps } from "../User/interface/User";
import style from "./style/user.module.css"

const User = (props: IUserProps) => {
  return (
    <h4
      className={style.user}>
      {props.name}
    </h4>
  );
};

export default User;
