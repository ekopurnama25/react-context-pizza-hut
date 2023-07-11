import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import "./menuspub.css";
import LogoPages from "../../images/bgbgi.png";
import { GetAllPizzasPublic } from "../../service/menu";

const MenuPublic = () => {
  const [pizzapublic, setPizzaHotpublic] = useState([]);
  useEffect(() => {
    const getPizzaPublic = async () => {
      const getAllPizzaPublic = await GetAllPizzasPublic();
      setPizzaHotpublic(getAllPizzaPublic);
    };

    getPizzaPublic();
  }, []);
  return (
    <>
      <Navbar />
      <div className="row">
        {pizzapublic &&
          pizzapublic?.data?.data?.map((PublicPizza, index) => {
            return (
              <div className="card-col">
                <div className="colom">
                  <div style={{ margin: "3%" }}>
                    <div
                      style={{
                        background: "#2ddae9",
                        width: "200px",
                        height: "280px",
                        borderRadius: "5px",
                      }}
                    >
                      <div style={{ textAlign: "center", padding: "5%" }}>
                        <img
                          src={PublicPizza.url}
                          width="170"
                          height="150"
                          alt=""
                        />
                      </div>
                      <div style={{ textAlign: "center", marginTop: "2%" }}>
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                            fontSize: "18px",
                          }}
                        >
                          {PublicPizza?.jenis_pizza}
                        </p>
                      </div>
                      <div style={{ textAlign: "center", marginTop: "2%" }}>
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontWeight: "bold",
                            fontSize: "18px",
                          }}
                        >
                          {PublicPizza?.harga_pizza}
                        </p>
                      </div>
                      <div style={{ textAlign: "center", padding: "5%" }}>
                        <button className="buttoncard">Beli Sekarang</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MenuPublic;
