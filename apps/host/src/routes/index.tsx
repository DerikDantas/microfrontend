import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Loader } from "@repo/ui/src";

const Home = lazy(() => import("../pages/Home"));
const Order = lazy(() => import("orderApp/Order"));
const Product = lazy(() => import("productApp/Product"));

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders/*" element={<Order />} />
          <Route path="/product/*" element={<Product />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
