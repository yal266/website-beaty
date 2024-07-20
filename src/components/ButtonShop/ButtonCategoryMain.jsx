import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../services/ProductsServiceCategory";
import ButtonCategory from "./ButtonCategory";

const ButtonCategoryMain = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        console.log("Categoria botones", fetchCategories);
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
    <ButtonCategory
      categories={categories}
      onCategorySelect={onCategorySelect}
    />
  );
};

export default ButtonCategoryMain;
