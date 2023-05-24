import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/posts'>Posts Page</Link>
            </li>
            <li>
                <Link to='/'>Main Page</Link>
            </li>
            <li>
                <Link to='/sign'>Sign in Page</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav