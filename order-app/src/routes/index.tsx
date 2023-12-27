import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path=":productId/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AppRoutes;
