import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="menu">
      <NavLink className="menu__link" to={"/"}>
        Home
      </NavLink>
      <NavLink className="menu__link" to={"/users"}>
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;
