import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "../components/Loader";
import Navbar from "../components/Navbar";

const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("productApp/Product"));

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/*" element={<Product />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
