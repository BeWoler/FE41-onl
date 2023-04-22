import { IHeaderProps } from "./interface/Header.interface";
import User from "../User/User";
import Title from "../Title/Title";

const Header = (props: IHeaderProps) => {
  return (
    <header>
      {props.isAuth === true ? <User name="Olya"/> : <Title content="Sign In"/>}
    </header>
  );
};

export default Header;
