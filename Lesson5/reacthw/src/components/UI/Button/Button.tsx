import React from 'react';
import { IButtonProps } from './button.interface';
import style from './style/button.module.css'

const Button = (props: IButtonProps) => {
    return <button className={style.sign} onClick={props.handler}>{props.value}</button>
};

export default Button;