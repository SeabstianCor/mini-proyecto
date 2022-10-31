import { useEffect, useState } from "react";
import { getProduct } from "../DataFetch/DataFetch";
import { getToken } from "../Token/Token";

export function useFetch() {
  const [post, setPost] = useState([]);
  const token = getToken();

  const fetchData = async () => {
    const res = await getProduct(token);
    setPost(res.data);
  };

  useEffect(() => {
    fetchData();
    // ^ Comentario para deshabilitar un warning debido a fecthData fuera del useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [post];
}

export function useToggle(ininitialState = false) {
  const [active, setActive] = useState(ininitialState);
  const handleToggle = () => setActive(!active);
  const handleFalse = () => setActive(false);
  const handleTrue = () => setActive(true);

  return [active, { handleToggle, handleFalse, handleTrue }];
}
