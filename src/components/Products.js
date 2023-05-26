import React from "react";
import ProductsCard from "./ProductsCard";

const Product = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center">
          shopping eneryday
        </h1>
        <span className="w-20 h[-3px] bg-black"></span>
      </div>
      <div className="max-w-screen-x1 mx-auto">
        <ProductsCard />
      </div>
    </div>
  );
};

export default Product;
