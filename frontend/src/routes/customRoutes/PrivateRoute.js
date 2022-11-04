import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../../context/User/userContext";
import { navbarContext } from "../../context/Navbar/navbarContext";
import { logout } from "../../utils/Token/Token";
import { useFetch } from "../../utils/CustomHooks/customHooks";
import { verifyToken } from "../../utils/DataFetch/DataFetch";
import Swal from "sweetalert2";

function PrivateRoute() {
  const [data, refetch] = useFetch(verifyToken);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  const [navbar, setNavbar] = useState(false);
  const isAuth = user.isUserLogin;
  const token = data.tokenExpired;

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (!isAuth) {
    navigate("/signin", { replace: true });
    logout(user, setUser);
  } else if (token) {
    navigate("/signin", { replace: true });
    logout(user, setUser);
    Swal.fire({
      icon: "error",
      title: "Token Expired",
      text: data.message,
    });
  } else {
    return (
      <navbarContext.Provider value={{ navbar, setNavbar }}>
        <Outlet />
      </navbarContext.Provider>
    );
  }
}

export default PrivateRoute;
