import axiosInstance from "../utils/useAxios";

const config = {
  headers: { "content-type": "multipart/form-data" },
};

export const addMenuPizzas = async (data) => {
  try {
    const req = await axiosInstance.post("/foods/", data, config);
    console.log("req", req);
    return req;
  } catch (err) {
    console.log(err);
  }
};

export const GetAllPizzas = async () => {
  try {
    const req = await axiosInstance.get("/foods/");
    console.log("req", req);
    return req.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const GetAllPizzasPublic = async () => {
  try {
    const req = await axiosInstance.get("/foods/public");
    return req;
  } catch (err) {
    console.log(err);
  }
};

export const DeleteIdFoods = async (id) => {
  try {
    const req = await axiosInstance.delete(`/foods/${id}`);
    return req;
  } catch (error) {
    console.log(error);
  }
};
