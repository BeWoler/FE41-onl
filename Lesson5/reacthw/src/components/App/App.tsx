import React from 'react';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';

function App() {
  return (
    <div>
      <Header isAuth = {true} />
      <MainPage/>
    </div>
  );
}

export default App;
