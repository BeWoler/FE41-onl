import React from 'react';
import { IHeaderProps } from './interface/header.interface';
import User from '../User/User';
import Title from '../Title/Title';

const Header = (props: IHeaderProps) => {
    return (
        <div>
           {props.isAuth ? <User name = "Антон"/> : <Title content = "Sign In"/>} 
            
        </div>
    );
};

export default Header;