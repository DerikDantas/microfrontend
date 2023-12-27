import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { IProduct } from "../../interfaces/Product";
import ButtonAddToCart from "./components/ButtonAddToCart";

const fetchProduct = async (id: string) => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((res) => res);
};

const ProductDetails: React.FC = () => {
  const { productId } = useParams();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<IProduct>({
    queryKey: ["products"],
    queryFn: () => fetchProduct(productId ?? ""),
    enabled: !!productId,
  });

  if (isLoading) return <p>Carregando</p>;

  if (isError) return <div>Houve um erro, tente novamente!</div>;

  return (
    <div className="antialiased">
      <div className="py-6">
        <Breadcrumb
          options={[
            { name: "Home", link: "/" },
            {
              name: product?.title ?? "",
              link: "/" + product?.id.toString(),
            },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <img
                    src={product?.image}
                    alt="Product"
                    className="h-72 w-full object-contain object-center"
                  />
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {product?.title}
              </h2>
              <p className="text-gray-500 text-sm">
                Categoria{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  {product?.category}
                </a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1">$</span>
                    <span className="font-bold text-indigo-600 text-3xl">
                      {product?.price}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-500">{product?.description}.</p>

              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <ButtonAddToCart product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
