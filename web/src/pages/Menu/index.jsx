import React, { useContext } from "react";
import Layouts from "../../components/Layout/Layout";
import AuthContext from "../../context/AuthContext";
import "./menu.css";
import { Link } from "react-router-dom";

const MenuUsersPages = () => {
  let { user } = useContext(AuthContext);
  return (
    <Layouts title="Menu">
      <div style={{ marginTop: "1%" }}>
        <Link to="/addmenu" className="buttonaddMenu">
          Tambah Menu
        </Link>
      </div>
    </Layouts>
  );
};

export default MenuUsersPages;
