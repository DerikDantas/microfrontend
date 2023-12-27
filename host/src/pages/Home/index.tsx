import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../components/Loader";
import { IProduct } from "../../interfaces/Product";
import ProductCard from "./components/ProductCard";

const fetchProducts = async () => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => res);
};

const Home = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <Loader />;

  if (isError) return <div>Houve um erro, tente novamente!</div>;

  return (
    <div className="container mx-auto">
      <section className="w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Home;
