import React from "react";

const Cart: React.FC = () => {
  return (
    <button className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner">
      <svg
        className="h-6 w-6 leading-none text-gray-300 stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      <span className="pl-1 text-gray-500 text-md">0</span>
    </button>
  );
};

export default Cart;
