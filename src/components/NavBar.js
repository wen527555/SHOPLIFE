import React from "react";
import { bag, cart } from "../assets/img";

const NavBar = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-x1 h-full mx-auto flex items-center justify-between">
        <div>
          <div className="w-28">SHOPLIFE</div>
        </div>
        <div className="flex item-center gap-8">
          <ul className="flex item-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-38 font-titleFont">
              HOME
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-38 font-titleFont">
              PAGES
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-38 font-titleFont">
              SHOP
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-38 font-titleFont">
              ELEMENT
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-38 font-titleFont">
              BLOG
            </li>
          </ul>
          <div className="relative">
            <img className="w-8 h-8" src={bag} alt="bagImg"></img>
            <span className="absolute w-8 top-2.5 left-0 text-sm flex items-center justify-center font-semibold ">
              0
            </span>
          </div>
          <img className="w-8 h-8" src={cart} alt="cartImg"></img>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
