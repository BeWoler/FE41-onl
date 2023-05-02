import React from 'react';
import style from "./style/postItem.module.css";
import { IPostItemProps } from './interface/postItem';

const PostItem =(props: IPostItemProps) =>{
    return(
        <div className={style.postItemStyle}>
            <p>{props.id}</p>
            <h2>{props.title}</h2>
            <div>{props.author}</div>
        </div>
    )
}

export default PostItem;




