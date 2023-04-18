// import React from 'react';
import style from "../style/header.module.css";
import { IHeaderProps } from './interface/header';
import { IUserProps } from '../User/interface/user';
import { ITitleProps } from '../Title/interface/title';

// Создать компонент Header, пропсом принимает булин значение isAuth

// функциональный реакт:
const Header = (props: IHeaderProps) => {
  return(
    <header className={style.header}>
    props.isAuth === true ? {props.userName} : {props.content}
    </header>
  )
}

// пример классового реакта- что не так?
// ERROR! 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.
// class Header extends React.Component<IHeaderProps> {
//   render() {
//     return(
//       <header className={style.header}>
//           {this.props.isAuth === false ? 'The header is correct' : 'The header should be corrected'}
//           <div>{this.props.title}</div>
//         </header>
//     );
//   }
// }

export default Header;
