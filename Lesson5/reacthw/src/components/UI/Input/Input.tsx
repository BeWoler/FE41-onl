import React, { ChangeEvent, useState } from 'react';
import { IInputProps } from './input.interface';
import style from './style/input.module.css'

const Input = (props: IInputProps) => {
    
    return (
        <input className={style.input} onChange={props.inputHandler}  {...props}/>
    )
};

export default Input; 