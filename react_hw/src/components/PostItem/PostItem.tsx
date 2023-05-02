import React from 'react';
import { IPostItem } from './interface/IPostItem';

const PostItem = (props:IPostItem) => {
    return (
        <div className="post">
            <p>
                {props.id}. {props.title}
            </p>
            <div>{props.author}</div>
        </div>
    );
};

export default PostItem;