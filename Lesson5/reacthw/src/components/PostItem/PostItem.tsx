import React from 'react';
import { IPostItemProps } from './interface/postitem.interface';

interface IPostItemList {
    post: IPostItemProps;
}

const PostItem = ({post}: IPostItemList) => {
    
    return (
        <div onClick={() => alert("ID: " + post.id + " Автор: " + post.author)}>
            <li key={post.id}>
                {post.title}.{post.author}
            </li>
        </div>
    );
};

export default PostItem;