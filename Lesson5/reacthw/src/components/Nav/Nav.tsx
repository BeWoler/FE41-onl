import React from 'react';
import style from './style/nav.module.css'
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul className={style.ul}>
                <li >
                    <Link className={style.a} to='/'>MainPage</Link>
                </li>
                <li>
                    <Link className={style.a} to='/posts'>PostPage</Link>
                </li>
                <li>
                    <Link className={style.a} to='/form'>FormPage</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;