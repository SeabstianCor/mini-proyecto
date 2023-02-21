import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { userContext } from "../../context/User/userContext";

function PublicRoute() {
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  const isAuth = user.isUserLogin;

  useEffect(() => {
    if (isAuth) {
      navigate("/home", { replace: true });
    }
  });

  return <Outlet />;
}

export default PublicRoute;
