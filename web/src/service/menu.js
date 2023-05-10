import axiosInstance from "../utils/useAxios";

export const addMenuPizzas = async (data) => {
  try {
    const req = await axiosInstance.post("/foods/", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("req", req);
    return req;
  } catch (err) {
    console.log(err);
  }
};
