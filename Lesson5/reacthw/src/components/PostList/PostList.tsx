import React from 'react';
import PostItem from '../PostItem/PostItem';
import { IPostItemProps } from "../PostItem/interface/postitem.interface";

interface IPostItemList {
    posts: IPostItemProps[];
}

const PostList = ({posts}: IPostItemList) => {
    return (
        <div>
            <ul>
            {posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
                
            </ul>
        </div>
    );
};

export default PostList;