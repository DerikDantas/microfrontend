import React, { useCallback } from "react";
import { IProduct } from "../../../../interfaces/Product";

interface IButtonAddToCartProps {
  product: IProduct | undefined;
}

const ButtonAddToCart: React.FC<IButtonAddToCartProps> = ({ product }) => {
  const handleAddToCart = useCallback(() => {
    const productsStorage = localStorage.getItem("products");

    const products: IProduct[] = productsStorage
      ? JSON.parse(productsStorage)
      : [];

    const isProductInCart = products.some((item) => item.id === product?.id);

    if (product && !isProductInCart) {
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [product]);

  return (
    <button
      onClick={handleAddToCart}
      className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
    >
      Adicionar ao carrinho
    </button>
  );
};

export default ButtonAddToCart;
