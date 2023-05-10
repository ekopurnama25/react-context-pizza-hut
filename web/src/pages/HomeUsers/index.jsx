import React, { useContext } from "react";
import Layouts from "../../components/Layout/Layout";
import "./homeusers.css";
import AuthContext from "../../context/AuthContext";

const HomeUsersPages = () => {
  let { user } = useContext(AuthContext);
  return (
    <Layouts title="Home">
      <div className="card">
        <div className="container">
          <h4>
            <b>Selamat datang diwebsite kami</b>
          </h4>
          <p>Anda Login Sebagai {user?.roles}</p>
        </div>
      </div>
    </Layouts>
  );
};

export default HomeUsersPages;
