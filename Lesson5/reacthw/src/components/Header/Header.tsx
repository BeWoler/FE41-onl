import React from 'react';
import style from "./style/header.module.css";
import { IHeaderProps } from './interface/header';



// Создать компонент Header, пропсом принимает булин значение isAuth

// функциональный реакт:
const Header = (props: IHeaderProps) => {
  return(
    <header>
      {props.isAuth}
      {/* className={style.} */} - дописать название класса!!!!!!!!!!!!!!!!!
    </header>
  )
}


// пример классового реакта:
// class Header extends React.Component {
//   render() {
//     return(
//       <header>
//         This is header!!!
//       </header>
//     );
//   }
// }

export default Header;
