import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/pizzahut.png";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="navbar">
      <div className="span-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div style={{ marginLeft: "2.5%" }}>
        <img src={Logo} width="130" height="30" alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
