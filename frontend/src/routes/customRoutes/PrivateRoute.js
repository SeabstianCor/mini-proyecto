import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { userContext } from "../../context/User/userContext";

function PrivateRoute() {
  const navigate = useNavigate();
  const { user } = useContext(userContext);

  useEffect(() => {
    if (user.isUserLogin !== true) {
      navigate("/signin", { replace: true });
    }
  });
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PrivateRoute;
