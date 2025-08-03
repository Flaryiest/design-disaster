import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/index/index.tsx";
import DemoPage from "./pages/demo/demo.tsx";
import ResourcesPage from "./pages/resources/resources.tsx";
import ProductsPage from "./pages/products/products.tsx";
import LoginPage from "./pages/login/login.tsx";
import SignUpPage from "./pages/signup/signup.tsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </>
  )
);

export default router;
