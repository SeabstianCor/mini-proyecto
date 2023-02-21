export const getToken = () => {
  return JSON.parse(localStorage.getItem("accessToken"));
};

export const setToken = (token) => {
  return localStorage.setItem("accessToken", JSON.stringify(token));
};

export const delToken = () => {
  return localStorage.removeItem("accessToken");
};

export const logout = (user, setUser) => {
  setUser({ ...user, isUserLogin: false });
  delToken();
};
