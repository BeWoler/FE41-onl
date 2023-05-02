import React from 'react';
import style from './style/title.module.css'


function Titel(props:{content:string}) {
    return (
        <div className={style.title}>
            {props.content}
        </div>
    );
}

export default Titel;