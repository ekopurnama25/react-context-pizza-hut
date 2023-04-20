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
