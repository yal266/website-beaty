import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../core/services/ProductsServiceCategory";
import Shoproductos from "../pages/Tienda/Shoproductos";

const ShoproductosMain = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        console.log("Categorias shoproductos", fetchedCategories);
        setCategories(fetchedCategories);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadCategories();
  }, []);

  return (
    <Shoproductos categories={categories} onCategorySelect={onCategorySelect} />
  );
};

export default ShoproductosMain;
