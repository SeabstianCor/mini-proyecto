import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/ProductPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import PrivateRoute from "./customRoutes/PrivateRoute";
import HomePage from "../pages/HomePage";
import PublicRoute from "./customRoutes/PublicRoute";

function MainRoutes() {
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

export default MainRoutes;
