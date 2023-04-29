import React from 'react';
import Header from "../Header/Header";
import PostItem from '../PostItem/PostItem';
import PostList from '../PostList/PostList';
import MainPage from '../../Pages/MainPage/MainPage';

const App = () => {
    return(
        // <div className='mainApp'>
        //     <Header isAuth={true} />
        // </div>
        <div>
          <MainPage />
        </div>
    );
};

export default App;