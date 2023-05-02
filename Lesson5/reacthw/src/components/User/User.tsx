import React from 'react';
import style from "./style/user.module.css";
import { IUserProps } from './interface/user';

// Создать компонент User, из пропсов принимает username и отображает
// Поместить компонент User в Header

// функциональный реакт:
const User = (props: IUserProps) => {
    return(
      <div className={style.mainUser}> 
        {props.userName}
      </div>
    )
  }

  
export default User;