import React from 'react';
import PostList from '../PostList/PostList';
import Header from '../Header/Header';

const MainPage = () => {
    return (
        <div>
            <Header isAuth={true} />
            <PostList/>
        </div>
    );
};

export default MainPage;