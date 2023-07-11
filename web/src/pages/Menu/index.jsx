import React, { useContext, useEffect, useState } from "react";
import Layouts from "../../components/Layout/Layout";
import AuthContext from "../../context/AuthContext";
import "./menu.css";
import "./table.css";
import { Link } from "react-router-dom";
import { DeleteIdFoods, GetAllPizzas } from "../../service/menu";
import MenuContext from "../../context/MenuContext";

const MenuUsersPages = () => {
  let { menu, setMenu, pizza, setPizzaHot } = useContext(MenuContext);
  //const [pizza, setPizzaHot] = useState([]);
  useEffect(() => {
    const getPizza = async () => {
      const getAllPizza = await GetAllPizzas();
      setPizzaHot(getAllPizza);
    };

    getPizza();
  }, []);

  const DeleteFoods = async (id) => {
    //e.preventDefault();
    try {
      await DeleteIdFoods(id);
      const dele = setPizzaHot(pizza?.data?.data?.filter((x) => x.id !== id));
      console.log(dele);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layouts title="Menu">
      <div style={{ margin: "3%" }}>
        <Link to="/Addmenu" className="buttonaddMenu">
          Tambah Menu
        </Link>
      </div>
      <div style={{ margin: "3%" }}>
        <table className="table">
          {" "}
          <thead>
            <tr>
              <th>No</th>
              <th>Images</th>
              <th>Jenis Pizza</th>
              <th>Qty</th>
              <th>Harga Pizza</th>
              <th> Desc Pizza</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pizza &&
              pizza?.data?.data?.map((pizz, index) => {
                return (
                  <tr key={pizz.id_foods}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={pizz?.url} height="70px" width="100px" />
                    </td>
                    <td>{pizz?.jenis_pizza}</td>
                    <td>{pizz?.qty}</td>
                    <td>{pizz?.harga_pizza}</td>
                    <td>{pizz?.desc_pizza}</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "red",
                          height: "30px",
                          widht: "70px",
                          borderRadius: "15px",
                          color: "#ffffff",
                          fontSize: "16px",
                          fontFamily: "sans-serif",
                          fontWeight: "bold",
                        }}
                        onClick={() => {
                          DeleteFoods(pizz.id_foods);
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Layouts>
  );
};

export default MenuUsersPages;
