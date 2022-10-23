import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { userContext } from "../../context/User/userContext";

function PublicRoute() {
  const navigate = useNavigate();
  const { user } = useContext(userContext);

  useEffect(() => {
    if (user.isUserLogin !== false) {
      navigate("/home", { replace: true });
    }
  });

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PublicRoute;
