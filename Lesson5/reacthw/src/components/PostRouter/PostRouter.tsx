import React from 'react'
import { IPostRouter } from "./interface/postrouter.interface";
import style from './style/postrouter.module.css';


const PostRouter = ({ id, title, content, author}: IPostRouter) => {
  return (
    <div className={style.post}>
        <div>{id}</div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{author}</p>
    </div>
  )
}

export default PostRouter