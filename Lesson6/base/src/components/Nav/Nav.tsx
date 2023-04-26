import React from "react";

const Nav = ({ navigationLinks }: any) => {
  return (
    <nav>
      <ul>
        {navigationLinks.map((item: any) => {
          return (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <a href={item.link}>{item.link}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
