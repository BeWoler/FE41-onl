import React from 'react';
import Header from "../Header/Header";

const App = () => {
    return(
        <div className='mainApp'>
            <Header isAuth={true} />
        </div>
    );
};

export default App;