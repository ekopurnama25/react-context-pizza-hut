import React from "react";
import Navbar from "../../components/Navbar";
import "./home.css";
import LogoPages from "../../images/bgbgi.png";

const HomePages = () => {
  return (
    <>
      <Navbar />
      <div class="row">
        <div class="column">
          <div style={{ textAlign: "center", marginTop: "12%" }}>
            <p
              style={{
                fontFamily: "'Brush Script MT', cursive",
                fontWeight: "bold",
                fontSize: "36px",
              }}
            >
              Spesial
            </p>
            <p
              style={{
                fontFamily: "'Courier New', monospace",
                fontWeight: "bold",
                fontSize: "124px",
                color: "#ea1951",
              }}
            >
              PIZZA
            </p>
            <p
              style={{
                fontFamily: "cursive",
                fontWeight: "bold",
                fontSize: "16px",
                marginRight: "25%",
              }}
            >
              We are here to help !!
            </p>
            <p
              style={{
                paddingTop: "15px",
                fontFamily: "'Trebuchet MS', sans-serif",
                textAlign: "justify",
                marginLeft: "26%",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              aperiam dicta tempore nihil corporis praesentium cumque, laborum
              repellat explicabo maiores delectus earum deserunt, magnam amet
              veritatis voluptate aspernatur, labore consequatur.
            </p>
            <div style={{ paddingTop: "20px", marginRight: "15%" }}>
              <button className="buttonlanding">
                please click here to select menu
              </button>
            </div>
          </div>
        </div>
        <div class="column">
          <div style={{ textAlign: "center", margin: "35px" }}>
            <img src={LogoPages} width="550" height="500" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePages;
