// app/products/page.tsx
import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
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

export default ProductsPage;
