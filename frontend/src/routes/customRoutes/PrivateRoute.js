import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { userContext } from "../../context/User/userContext";
import { navbarContext } from "../../context/Navbar/navbarContext";
import { logout } from "../../utils/Token/Token";

function PrivateRoute() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  const [navbar, setNavbar] = useState(false);
  const isAuth = user.isUserLogin;

  useEffect(() => {
    if (!isAuth) {
      logout(user, setUser);
      navigate("/signin", { replace: true });
    }
  });
  return (
    <navbarContext.Provider value={{ navbar, setNavbar }}>
      <Outlet />
    </navbarContext.Provider>
  );
}

export default PrivateRoute;
