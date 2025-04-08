import axiosClient from "./axiosClient";

const register = async (data) => {
  const res = await axiosClient.post("/register", data);
  return res;
};

const login = async (data) => {
  const res = await axiosClient.post("/login", data);
  return res;
};

const getInfo = async (userId) => {
  const res = await axiosClient.get(`/user/info/${userId}`);
  return res;
};

export { register, login, getInfo };
