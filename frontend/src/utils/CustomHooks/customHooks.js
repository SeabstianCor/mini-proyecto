import { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/User/userContext";
import { verifyToken } from "../DataFetch/DataFetch";
import { getToken, logout } from "../Token/Token";

export function useFetch(getRequest) {
  const [post, setPost] = useState([]);
  const token = getToken();
  const [active, { handleToggle }] = useToggle();

  const refetch = () => handleToggle();

  useEffect(() => {
    getRequest(token).then((res) => setPost(res.data));
  }, [getRequest, token]);

  return [post, refetch];
}

export function verifyTokenExpired(setState, user, setUser) {
  const token = getToken();
  verifyToken(token).then((res) => {
    console.log(res);
    if (res.authorization === false) {
      console.log(res.authorization);
      logout(user, setUser);
    }
  });

  setState(true);
}

export function useToggle(ininitialState = false) {
  const [active, setActive] = useState(ininitialState);
  const handleToggle = () => setActive(!active);
  const handleFalse = () => setActive(false);
  const handleTrue = () => setActive(true);

  return [active, { handleToggle, handleFalse, handleTrue }];
}
