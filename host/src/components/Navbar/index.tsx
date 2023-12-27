import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./components/Cart";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
        <div className="flex items-center justify-between md:justify-center">
          {/* <!-- Menu Trigger --> */}
          <button
            className="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              className="text-gray-500 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link to="/" className="font-bold text-gray-700 text-2xl">
            Shop.
          </Link>

          <div
            className={`md:flex space-x-3 absolute md:relative max-md:left-0 max-md:top-12 max-md:bg-white flex-1 max-md:py-4 max-md:w-full lg:ml-8 ${
              menuOpen ? "flex" : "hidden"
            }`}
          >
            <Link
              to="/orders"
              className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 "
            >
              Pedidos
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
