import React from 'react';
import User from '../User/User';
import Title from '../Title/Title';


function Header(props:{ isAuth:boolean }) {
    return (
        <div>
            {props.isAuth ? <User name = "Vladimir"/> : <Title content = "Sign In"/>}
        </div>
    );
}

export default Header;