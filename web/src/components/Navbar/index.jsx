import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/pizzahut.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav">
        <div className="span-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo">
          <img src={Logo} width="130" height="30" alt="" />
        </div>
        <ul>
          <li>
            <Link className="link-to" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-to">Menu</Link>
          </li>
          <li>
            <Link className="link-to">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
