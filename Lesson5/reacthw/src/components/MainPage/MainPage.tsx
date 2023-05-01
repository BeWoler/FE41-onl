import React from 'react';
import PostList from '../PostList/PostList';

const data = [
    { id: 1, title: 'First post', author: 'King'},
    { id: 2, title: 'foster', author: 'Sasha'},
    { id: 3, title: 'category', author: 'Maria'},
    { id: 4, title: 'fault', author: 'Lev'},
    { id: 5, title: 'curtain', author: 'Lev'},
    { id: 6, title: 'jury', author: 'King'},
    { id: 7, title: 'extraterrestrial', author: 'Sasha'},
    { id: 8, title: 'deputy', author: 'Martin'},
    { id: 9, title: 'amuse', author: 'Joe'},
    { id: 10, title: 'snail', author: 'King'},
  ]

const MainPage = () => {
    return (
        <div>
            <PostList posts={data}/>
        </div>
    );
};

export default MainPage;