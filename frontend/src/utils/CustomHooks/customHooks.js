import { useEffect, useState } from "react";
import { getToken } from "../Token/Token";

export function useFetch(getRequest) {
  const [post, setPost] = useState([]);
  const token = getToken();

  useEffect(() => {
    async function fetchData() {
      const res = await getRequest(token);
      setPost(res.data);
    }
    fetchData();
  }, [getRequest, token]);

  // useEffect(() => {
  //   new Promise((resolve, reject) => {
  //     const res = getRequest(token);
  //     resolve(res);
  //   }).then((res) => {
  //     setPost(res.data);
  //   });
  // }, [getRequest, token]);

  return [post];
}

export function useToggle(ininitialState = false) {
  const [active, setActive] = useState(ininitialState);
  const handleToggle = () => setActive(!active);
  const handleFalse = () => setActive(false);
  const handleTrue = () => setActive(true);

  return [active, { handleToggle, handleFalse, handleTrue }];
}
