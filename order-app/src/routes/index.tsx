import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "../pages/Checkout";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path=":productId/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AppRoutes;
