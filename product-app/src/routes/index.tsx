import { Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path=":productId" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
