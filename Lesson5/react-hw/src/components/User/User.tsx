import { IUserProps } from "./interface/User";
import style from "./style/User.module.css";

const User = (props: IUserProps) => {
  return (
    <div className={style.username}>
      {props.username}
    </div>
  );
};

export default User;