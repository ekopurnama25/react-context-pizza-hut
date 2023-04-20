import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { authUsers } from "../../service/auth";
import { useNavigate } from "react-router-dom";
import "./login.css";

import LogoLogin from "../../images/lplplp.jpg";

const LoginPages = () => {
  const [authtication, setAuthtication] = useState({});
  //const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAuthtication({ ...authtication, [name]: value });
  };

  const handleLoginUsers = async (e) => {
    e.preventDefault();
    try {
      //console.log(authtication);
      const res = await authUsers(authtication);
      if (res) {
        navigate("/users");
      } else {
        navigate("/login");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div class="row">
        <div class="column">
          <div style={{ textAlign: "center", marginTop: "12%" }}>
            <div style={{ textAlign: "center", margin: "35px" }}>
              <img src={LogoLogin} width="600" height="400" alt="" />
              <p
                style={{
                  fontFamily: "'Brush Script MT', cursive",
                  fontWeight: "bold",
                  fontSize: "42px",
                  color: "#ea1951",
                  marginLeft: "15%",
                }}
              >
                Pizzas Foods
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div style={{ textAlign: "center", marginTop: "28%" }}>
            <div style={{ textAlign: "center", margin: "35px" }}>
              <div style={{ marginRight: "49%" }}>
                <p
                  style={{
                    fontFamily: "'Brush Script MT', cursive",
                    fontWeight: "bold",
                    fontSize: "34px",
                    color: "#ea1951",
                  }}
                >
                  Masuk
                </p>
              </div>
              <div style={{ marginRight: "6%", marginTop: "20px" }}>
                <p
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "16px",
                  }}
                >
                  Please login first to load activities
                </p>
              </div>
              <form onSubmit={handleLoginUsers}>
                <div>
                  <input
                    className="form-control rounded-input"
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                    value={authtication.username}
                  />
                </div>
                <div>
                  <input
                    className="form-control rounded-input"
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    value={authtication.password}
                  />
                </div>
                <div style={{ marginLeft: "47%", marginTop: "15px" }}>
                  <button className="buttonlanding">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPages;
