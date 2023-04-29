import React from 'react';
import style from "../style/postItem.module.css";
import { IPostItemProps } from './interface/postItem';


//Стили опять не применяются!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const PostItem =(props: IPostItemProps) =>{
    return(
        <div className="postItemStyle">
            <p>{props.id}</p>
            <h2>{props.title}</h2>
            <div>{props.author}</div>
        </div>
    )
}

export default PostItem;




