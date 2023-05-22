import React from 'react'
import PostListRouter from '../components/PostListRouter/PostListRouter';
import { IPostRouter } from '../components/PostRouter/interface/postrouter.interface';


const PostsPage = () => {
    const postsData: IPostRouter[] = [
        { id: 1, author: 'Example author 1', content: 'Example content 1', title: 'Example Title 1'},
        { id: 2, author: 'Example author 2', content: 'Example content 2', title: 'Example Title 2'},
    ];
    return (
        <PostListRouter posts={postsData} />
    )
}
export default PostsPage;