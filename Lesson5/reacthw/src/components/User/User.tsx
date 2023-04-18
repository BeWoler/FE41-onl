import React from 'react';
import { IUserProps } from './interface/user';

// Создать компонент User, из пропсов принимает username и отображает
// Поместить компонент User в Header

// функциональный реакт:
const User = (props: IUserProps) => {
    return(
      <div> 
        {props.userName === "Mike"}
      </div>
    )
  }

  
export default User;