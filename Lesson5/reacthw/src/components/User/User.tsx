import React from 'react';
import { IUserProps } from './interface/user.interface';
import style from "./style/user.module.css"

const User = (props: IUserProps) => {
    return (
        <div className={style.user}>
        {props.name}
    </div>
    );
};

export default User;