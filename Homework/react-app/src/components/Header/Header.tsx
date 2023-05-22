import Title from "../Title/Title";
import User from "../User/User";
import style from "./header.module.css";

interface IHeaderProps {
  isAuth: boolean;
}

const Header = (props: IHeaderProps) => {
  return (
    <header className={style.header}>
      {props.isAuth ? <User userName="Galina" /> : <Title content="Sign In" />}
    </header>
  );
};

export default Header;
