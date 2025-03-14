import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
};

const ProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-black">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg bg-white">
            <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded-lg mb-3" />
            <h2 className="text-xl font-bold text-black">{product.title}</h2>
            <p className="text-lg text-green-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
