import React, { useContext, useState } from "react";
import Layouts from "../../components/Layout/Layout";
import AuthContext from "../../context/AuthContext";
import "./menu.css";
//import { Navigate } from "react-router-dom";
import { addMenuPizzas } from "../../service/menu";
import { useNavigate } from "react-router-dom";
const AddMenuUsersPages = () => {
  const navigate = useNavigate();
  const [menupizza, setMenuPizza] = useState({});
  const [images, setImages] = useState([]);
  const [progress, setProgess] = useState(0);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMenuPizza({ ...menupizza, [name]: value });
  };

  const onFileChange = (e) => {
    //let file = e.target.files[0];
    setImages(e.target.files[0]);
  };

  const handleAddMenuPIzza = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      // images.forEach((file) => {
      //   formData.append("images", file);
      // });
      formData.append("images", images);
      formData.append("jenis_pizza", menupizza.jenis_pizza);
      formData.append("qty", menupizza.qty);
      formData.append("harga_pizza", menupizza.harga_pizza);
      //formData.append("images", menupizza.images);
      formData.append("desc_pizza", menupizza.desc_pizza);
      const res = await addMenuPizzas(formData);
      //return <Navigate to="/menu" replace={true} />;
      if (res) {
        navigate("/Menu");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layouts title="AddMenu">
      <div className="FormMenus">
        <h6 style={{ fontFamily: "monospace", fontSize: "24px" }}>
          Add Menu Pizza
        </h6>
        <form onSubmit={handleAddMenuPIzza}>
          <div>
            <input
              className="form-control roun-input"
              type="text"
              placeholder="Jenis Pizza"
              name="jenis_pizza"
              onChange={handleChange}
              value={menupizza.jenis_pizza || ""}
            />
          </div>
          <div>
            <input
              className="form-control roun-input"
              type="text"
              placeholder="Jumlah Pizza"
              name="qty"
              onChange={handleChange}
              value={menupizza.qty || ""}
            />
          </div>
          <div>
            <input
              className="form-control roun-input"
              type="text"
              placeholder="Harga Pizza"
              name="harga_pizza"
              onChange={handleChange}
              value={menupizza.harga_pizza || ""}
            />
          </div>
          <div>
            <input
              className="form-control roun-input"
              type="file"
              placeholder="Foto Pizza"
              name="images"
              multiple
              accept="image/*"
              onChange={onFileChange}
              //value={menupizza?.images}
            />
          </div>
          <div>
            <input
              className="form-control roun-input"
              type="text"
              placeholder="Deskription Pizza"
              name="desc_pizza"
              onChange={handleChange}
              value={menupizza.desc_pizza || ""}
            />
          </div>
          <div style={{ marginLeft: "47%", marginTop: "15px" }}>
            <button className="buttonlanding">Tambah Menu Pizza</button>
          </div>
        </form>
      </div>
    </Layouts>
  );
};

export default AddMenuUsersPages;
