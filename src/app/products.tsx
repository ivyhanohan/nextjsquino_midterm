
import { GetServerSideProps } from "next";
import { Product } from "./types/types";

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage = ({ products }: ProductsPageProps) => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: {
      products: data.products,
    },
  };
};

export default ProductsPage;
