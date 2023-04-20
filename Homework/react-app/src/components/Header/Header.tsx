import Title from '../Title/Title';
import User from '../User/User';
import { IHeaderProps } from './interface/header';
import style from './style/header.module.css'

const Header = (props: IHeaderProps) => {
return (
  <header className={style.header}>
    {props.isAuth ? <User userName='Galina'/> : <Title content='Sign In' />}
  </header>
)
}

export default Header;
