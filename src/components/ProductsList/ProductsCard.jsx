import React from "react";
import { Link } from "react-router-dom";
import ProductInfo from "./ProductInfo";

function ProductCard({ product, onQuickView }) {
  return (
    <div className="col">
      <div className="relative flex flex-col p-6 overflow-hidden border text-center h-100">
        <Link to={`/productodetalle/${product.idproducto}`}>
          <ProductImage product={product} />
        </Link>
        <ProductActions product={product} onQuickView={onQuickView} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
