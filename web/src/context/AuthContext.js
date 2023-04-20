import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/useAxios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    localStorage.getItem("userToken")
      ? JSON.parse(localStorage.getItem("userToken"))
      : null
  );

  //console.log(user);
  // const loginUsers = async ({ e, data }) => {
  //   e.preventDefault();
  //   try {
  //     const req = await axiosInstance.post("/auth/", data);

  //     localStorage.setItem("userToken", req);
  //     return req;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  let contextData = {
    user: user,
    setUser: setUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
