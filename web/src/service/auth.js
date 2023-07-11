import axiosInstance from "../utils/useAxios";

export const authUsers = async (data) => {
  try {
    const req = await axiosInstance.post("/auth/", data);
    localStorage.setItem("userToken", JSON.stringify(req.data));
    return req;
  } catch (err) {
    console.log(err);
  }
};

export const CheckUsers = async (data) => {
  //console.log(data);
  try {
    const req = await axiosInstance.post("/auth/home/", data);
    console.log(req);
    return req;
  } catch (err) {
    console.log(err);
  }
};

export const refreshTokenAction = async (data) => {
  try {
    const req = axiosInstance.post("/auth/refresh_token", {
      refreshToken: data,
    });
    console.log("HALLOLLLLLLLLLLL", req);
    return req;
  } catch (err) {
    console.log(err);
  }
};
