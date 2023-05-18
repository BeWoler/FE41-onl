import React from "react";
import { useContext } from "react";
import style from "./style/header.module.css";
import { AllContext, ThemeContext } from ".."; //  ??????что это за двоеточие????
import { IContext } from "../store/context.interface";
// import { IHeaderProps } from './interface/header';
// import User from '../User/User';
// import Title from '../Title/Title';

const Header = () => {
  const themeContext: { theme: string } = useContext<{ theme: string }>(
    ThemeContext
  );
  const Allcontext: IContext = useContext<any>(AllContext);
  return (
    <div>
      {context.theme.theme}/{Allcontext.theme.theme}
    </div>
  );
};

export default Header;

// Создать компонент Header, пропсом принимает булин значение isAuth

// функциональный реакт:
// const Header = (props: IHeaderProps) => {
//   return(
//     <header className={style.header}>
//       {props.isAuth  === false ? <User userName='Mike' /> : <Title content='Sign in'/>}
//     </header>
//   )
// }

// пример классового реакта- что не так? Property 'header' does not exist on type 'Readonly<IHeaderProps>'.
// ERROR!
// class Header extends React.Component<IHeaderProps> {
//   render() {
//     return(
//       <header className={style.header}>
//           {this.props.isAuth === false ? <User userName='Mike' /> : <Title content='Sign in'/>}
//           <div>{this.props.header}</div>
//         </header>
//     );
//   }
// }

// export default Header;
