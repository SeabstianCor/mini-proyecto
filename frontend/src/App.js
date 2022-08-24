import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import CreateProductPage from "./pages/product/CreateProductPage";
import DeleteProductPage from "./pages/product/DeleteProductPage";
import UpdateProductPage from "./pages/product/UpdateProductPage";
import ViewProductPage from "./pages/product/ViewProductPage";
import ProductPage from "./pages/ProductPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />

      <Route path="/product" element={<ProductPage />}>
        <Route path="create" element={<CreateProductPage />} />
        <Route path="read" element={<ViewProductPage />} />
        <Route path="update/:productId" element={<UpdateProductPage />} />
        <Route path="delete/:productId" element={<DeleteProductPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
