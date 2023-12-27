import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "../components/Loader";
import Navbar from "../components/Navbar";

const Home = lazy(() => import("../pages/Home"));

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
