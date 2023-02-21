import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/ProductPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import PrivateRoute from "./customRoutes/PrivateRoute";
import HomePage from "../pages/HomePage";
import PublicRoute from "./customRoutes/PublicRoute";
import { useContext, useEffect } from "react";
import { userContext } from "../context/User/userContext";
import { useFetch, verifyTokenExpired } from "../utils/CustomHooks/customHooks";
import { verifyToken } from "../utils/DataFetch/DataFetch";

function MainRoutes() {
  const { user, setUser, isTokenVerified, setTokenVerified } =
    useContext(userContext);

  useEffect(() => {
    verifyTokenExpired(setTokenVerified, user, setUser);
  }, []);

  console.log(isTokenVerified);

  if (isTokenVerified) {
    return (
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LandingPage />}></Route>
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<SignUpPage />}></Route>
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<SignInPage />}></Route>
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/product" element={<ProductPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    );
  }
}

export default MainRoutes;
