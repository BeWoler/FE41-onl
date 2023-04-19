import React from 'react';
import { ITitleProps } from './interface/title.interface';
import style from "./style/title.module.css"

const title = (props: ITitleProps) => {
    return (
        <div className={style.title}>   
            {props.content}
        </div>
    );
};

export default title;