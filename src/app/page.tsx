import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg mb-4">Ivy H. Quiño</h1>
      <p className="text-xl font-semibold drop-shadow-md mb-6">BSIT - 3</p>
      <Link href="/">
        <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105">
          Let's Get Started
        </button>
      </Link>
    </div>
  );
};

export default Page;
