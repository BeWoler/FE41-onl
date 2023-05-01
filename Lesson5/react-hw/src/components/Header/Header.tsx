import User from "../User/User";
import Title from "../Title/Title";
import { IHeaderProps } from "./interface/Header";
import style from "./style/Header.module.css";

const Header = (props: IHeaderProps) => {
  return (
    <header className={style.header}>
      {props.isAuth === true ? <User username={"Roman"} /> : <Title content={"Sign In"} />}
    </header>
  );
};

export default Header;