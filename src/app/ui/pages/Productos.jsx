import React from "react";
import { Outlet } from "react-router-dom";
import ShoproductosMain from "../hook/ShopProductosMain";
import BrowseCategory from "./Tienda/BrowseCategory";
import ButtonCategoryMain from "../hook/ButtonCategoryMain";
import ProductListMain from "../hook/ProductList";
import Search from "../components/common/search/Search";

const Productos = () => {
  return (
    <>
      <Search />
      <ShoproductosMain />
      <BrowseCategory />
      <ButtonCategoryMain />
      <ProductListMain />
      <Outlet />
    </>
  );
};

export default Productos;
