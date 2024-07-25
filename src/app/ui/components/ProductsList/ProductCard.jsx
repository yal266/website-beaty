import React from "react";
import { API_BASE_URL } from "@api/APIweb";
import nofoto from "@assets/images/nofoto.jpg";
import { RiHeart3Line, RiShoppingBagLine } from "@remixicon/react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="max-w-xs border border-gray-200 rounded-lg shadow overflow-hidden">
      <div className="w-full h-48 bg-white flex items-center justify-center relative">
        <button className="absolute top-2 right-2 border rounded-full p-2 border-fuchsia-200 hover:bg-gray-100 transition-colors">
          <RiHeart3Line className="w-5 h-5 text-gray-800" />
        </button>

        <img
          className="w-40 h-40 object-contain"
          src={
            product.imagenchica ? API_BASE_URL + product.imagenchica : nofoto
          }
          alt={product.nombre}
        />
      </div>
      <div className="p-4 bg-pink-100 rounded-lg">
        <h3 className="font-bold text-md mb-2 truncate text-gray-800">
          {product.nombre}
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              ${product.precio}
            </span>
            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 truncate max-w-[150px]"></span>
          </div>
          <button className="rounded-full bg-gray-900 p-2 hover:bg-slate-600 transition-colors">
            <RiShoppingBagLine className="text-white w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
