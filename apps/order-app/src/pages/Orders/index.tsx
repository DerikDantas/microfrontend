import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Loader } from "../../components/Loader";
import { IProduct } from "../../interfaces/Product";

const fetchProducts = async () => {
  return fetch("https://fakestoreapi.com/products?limit=5")
    .then((res) => res.json())
    .then((res) => res);
};

const Orders: React.FC = () => {
  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery<IProduct[]>({
    queryKey: ["orders"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <Loader />;

  if (isError) return <div>Houve um erro, tente novamente!</div>;

  return (
    <div className="p-8 rounded-md w-full">
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="flex justify-center rounded-lg overflow-hidden">
            <table className="w-4/5 leading-normal table-fixed">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
                    Pedidos
                  </th>

                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
                    Quantidade
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order, index) => (
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-20 h-20">
                          <img
                            className="w-full h-full rounded-full"
                            src={order.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap font-semibold">
                            {order.title}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap font-semibold">
                        {index + 1}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p>
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Active</span>
                        </span>
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
