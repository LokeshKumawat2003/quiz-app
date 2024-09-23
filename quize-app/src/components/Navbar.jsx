import React from "react";

import { NavLink } from "react-router-dom";
import '../style/nav.css'
export const Navbar = () => {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/login",
      name: "Login",
    },
  ];

  return (
    <nav>
      <div className="logo">
      <h1>Quiz Section</h1>
     <div className="nav-box">
     {links.map((el, i) => {
        return (
          <NavLink key={i} to={el.path}>
            {el.name}
          </NavLink>
        );
      })}
     </div>
    </div>
    </nav>
  );
};
