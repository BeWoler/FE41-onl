import React from 'react';
import Header from "../Header/Header";
import User from "../User/User";
import Title from "../Title/Title";

const App = () => {
    return(
        <div>
            <Header isAuth={true} />
            <User userName="Mike" />
            <Title content="Sign in" />
        </div>
    );
};

export default App;