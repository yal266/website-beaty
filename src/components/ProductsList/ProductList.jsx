import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../services/ProductsServiceList";

const ProductList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productosData = await fetchProducts();
        console.log("Productos en ProductList:", productosData);
        setProductos(productosData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productos.map((producto) => (
        <ProductCard key={producto.idproducto} product={producto} />
      ))}
    </div>
  );
};

export default ProductList;
