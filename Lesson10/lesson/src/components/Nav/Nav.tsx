import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../UI/Button";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ul>
        <li>
          <button
            onClick={() => {
              navigate(-1);
            }}>
            Back
          </button>
        </li>
        <li>
          <Link to='/posts'>Posts Page through the Link</Link>
          {/* <a href='/posts'>Posts</a> */}
        </li>
        <li>
          <NavLink to='/posts'>Posts Page 2 through the NavLink</NavLink>
        </li>
        <li>
          <Link to='/'>Main Page</Link>
          {/* <a href='/'>Main</a> */}
        </li>
        <li>
          {/* <Link to='/admin'> */}
          <Button to='/admin' />
          <Button />
          {/* </Link> */}
          {/* <a href='/'>Main</a> */}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
