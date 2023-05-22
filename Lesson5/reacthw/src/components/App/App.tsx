import React from 'react';
import Header from "../Header/Header";
import PostItem from '../PostItem/PostItem';
import PostList from '../PostList/PostList';
// import MainPage from '../../Pages/MainPage/MainPage';

import AppRouter from "../../components/AppRouter/AppRouter";
import Nav from "../../components/Nav/Nav";


const App = () => {
    return(
      <>
      <Nav />
      <AppRouter />
      </>
      
      
        // <div className='mainApp'>
        //     <Header isAuth={true} />
        // </div>

        // <div>
        //   <MainPage />
        // </div>
    );
};

export default App;