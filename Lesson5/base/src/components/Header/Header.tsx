import Button from "../Button/Button";
import { IHeaderProps } from "./interface/header";
import style from "./style/header.module.css";

const Header = (props: IHeaderProps): JSX.Element => {
  return (
    <header
      className={props.id === 1 ? style.header : style.secondHeader}
      style={props.id === 1 ? { color: "orange" } : { color: "green" }}>
      {props.id ? <div>Header with first id</div> : <a href='google.com'>Link</a>}
      <Button content="Header Push me!" isDisabled={false} handler={() => console.log('HEADER')}/>
    </header>
  );
};

export default Header;
