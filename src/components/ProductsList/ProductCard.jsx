import React from "react";
import { API_BASE_URL } from "../../utils/APIweb";
import nofoto from "../../assets/images/nofoto.jpg";
import { RiShoppingBagLine } from "@remixicon/react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="max-w-xs border border-gray-200 rounded-lg shadow overflow-hidden">
      <div className="w-full h-48 bg-white flex items-center justify-center">
        <img
          className="w-40 h-40 object-contain"
          src={
            product.imagenchica ? API_BASE_URL + product.imagenchica : nofoto
          }
          alt={product.nombre}
        />
      </div>
      <div className="p-4 bg-gray-200 rounded-lg">
        <h3 className="font-bold text-lg mb-2 truncate">{product.nombre}</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              ${product.precio}
            </span>
            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 truncate max-w-[150px]">
              {product.categoria}
            </span>
          </div>
          <button className="rounded-full bg-slate-500 p-2 hover:bg-slate-600 transition-colors">
            <RiShoppingBagLine className="text-white w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
