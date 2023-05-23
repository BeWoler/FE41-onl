import IPost from "../interface/post"
import { localStorageTheme } from "../pages/mainPage"
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"

const Post = (props:IPost) => {
    return(
            <div className={`post__${localStorageTheme}`}>
            <h2 className="post__h">{props.title}</h2>
            <p className="post__txt">{props.author}</p>
        </div>
    )
}
export default Post;