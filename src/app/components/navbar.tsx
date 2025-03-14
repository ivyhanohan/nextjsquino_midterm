import Link from "next/link";
import React from "react";


const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold tracking-wide">
          <Link href={"/"}>
            <span className="cursor-pointer hover:text-yellow-300 transition-transform transform hover:scale-105">Welcome!</span>
          </Link>
        </div>
        <div className="flex space-x-6 text-lg">
          <Link href={"/products"} className="flex items-center gap-2 hover:text-yellow-200 transition-transform transform hover:scale-110">
            {/* <FiShoppingBag className="text-xl" /> */}
            <span className="px-3 py-2 rounded-lg bg-yellow-400 text-black hover:bg-yellow-300">Products</span>
          </Link>
          <Link href={"/todos"} className="flex items-center gap-2 hover:text-yellow-200 transition-transform transform hover:scale-110">
            {/* <FiCheckSquare className="text-xl" /> */}
            <span className="px-3 py-2 rounded-lg bg-green-400 text-black hover:bg-green-300">Todos</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
