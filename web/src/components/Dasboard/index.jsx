import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/pizzahut.png";
import "./dashboard.css";

const Dashboard = () => {
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
      </div>
    </div>
  );
};

export default Dashboard;
