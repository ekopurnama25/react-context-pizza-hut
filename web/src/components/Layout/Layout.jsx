import React, { useEffect } from "react";
import Dashboard from "../Dasboard";
import "./layout.css";
import { Link } from "react-router-dom";

const Layouts = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <>
      <Dashboard />
      <div className="left">
        <ul style={{ marginTop: "3%" }}>
          <li className="link-menu">
            <Link to="/users" className="lmenu">
              Dashboard
            </Link>
          </li>
          <li className="link-menu">
            <Link to="/menu" className="lmenu">
              Menu
            </Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layouts;
