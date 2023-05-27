import React from "react";
import ProductsCard from "./ProductsCard";

const Product = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center">
          shopping eneryday
        </h1>
        <span className="w-20 h[-3px] bg-black"></span>
      </div>

      <div className="max-w-screen-x1 mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
