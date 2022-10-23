import axios from "axios";

export const getProduct = async () => {
  const url = "http://localhost:3000/product/read";
  const result = await axios.get(url);
  return result;
};

export const postSignIn = async (username, password) => {
  const url = "http://localhost:3000/signin";
  const result = await axios.post(url, { username, password });
  return result;
};

// 4 funciones get, post, put, delete
