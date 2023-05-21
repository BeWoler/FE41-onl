import { IPostItem } from "./post.interface";

import './post.css'


const PostItem = ({ id, title, author }: IPostItem) => {


    return (
        <div className="post">
            <div>{id}</div>
            <div>{title}</div>
            <div>{author}</div>
        </div>
    )
}
export default PostItem;