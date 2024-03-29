export const getLocalStorage = () => {
  const localData = localStorage.getItem("userData");
  return localData
    ? JSON.parse(localData)
    : {
        isUserLogin: false,
        userData: {
          username: "string",
          userRole: "string",
        },
      };
};

export const setLocalStorage = (user) => {
  return localStorage.setItem("userData", JSON.stringify(user));
};
