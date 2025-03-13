import Link from "next/link";
import React from "react";
// import { FiShoppingBag, FiCheckSquare } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold tracking-wide">
          <Link href={"/"}>
            <span className="cursor-pointer hover:text-gray-200 transition">Midterm Project</span>
          </Link>
        </div>
        <div className="flex space-x-6 text-lg">
          <Link href={"/products"} className="flex items-center gap-2 hover:text-gray-300 transition">
            {/* <FiShoppingBag className="text-xl" /> */}
            <span>Products</span>
          </Link>
          <Link href={"/todos"} className="flex items-center gap-2 hover:text-gray-300 transition">
            {/* <FiCheckSquare className="text-xl" /> */}
            <span>Todos</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;