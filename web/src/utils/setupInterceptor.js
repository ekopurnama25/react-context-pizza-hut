import axiosInstance from "./useAxios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const setupInterceptors = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      let users = localStorage.getItem("userToken")
        ? JSON.parse(localStorage.getItem("userToken"))
        : null;
      if (users) {
        // console.log(users);
        config.headers["Authorization"] = "Bearer " + users?.accsesToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      let users = localStorage.getItem("userToken")
        ? JSON.parse(localStorage.getItem("userToken"))
        : null;
      const originalConfig = err.config;
      const status = err.response ? err.response.status : null;
      //const refresh = false;

      if (status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const response = await axiosInstance.post("/auth/refresh_token", {
            refreshToken: users?.refreshToken,
          });
          if (response.status === 200) {
            localStorage.setItem("userToken", JSON.stringify(response.data));
            let users = localStorage.getItem("userToken")
              ? JSON.parse(localStorage.getItem("userToken"))
              : null;
            // console.log(users);
            axiosInstance.defaults.headers.common["Authorization"] =
              "Bearer " + users.accsesToken;
          }
          return axiosInstance(originalConfig);
        } catch (error) {
          return Promise.reject(error);
        }
      }
      return Promise.reject(err);
    }
  );
};

export default setupInterceptors;
