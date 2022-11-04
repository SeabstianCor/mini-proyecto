import axios from "axios";

export const createProduct = async (token, name, price, expired, category) => {
  const url = "http://localhost:3000/product/create";
  const res = await axios.post(
    url,
    { name, price, expired, category },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return res;
};

export const updateProduct = async (
  id,
  token,
  name,
  price,
  expired,
  category
) => {
  const url = "http://localhost:3000/product/update/" + id;
  const res = await axios.put(
    url,
    { name, price, expired, category },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return res;
};

export const deleteProduct = async (id, token) => {
  const url = "http://localhost:3000/product/delete/" + id;
  const res = await axios.delete(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res;
};

export const getProduct = async (token) => {
  const url = "http://localhost:3000/product/read";
  const res = await axios.get(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res;
};

export const postSignUp = async (username, password) => {
  const url = "http://localhost:3000/signup";
  const res = await axios.post(url, { username, password });
  return res;
};

export const postSignIn = async (username, password) => {
  const url = "http://localhost:3000/signin";
  const res = await axios.post(url, { username, password });
  return res;
};

export const verifyToken = async (token) => {
  const url = "http://localhost:3000/signin/user";
  const res = await axios.get(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res;
};

// 4 funciones get, post, put, delete
