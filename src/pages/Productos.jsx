import React from "react";
import { Outlet } from "react-router-dom";
import Search from "../components/search/Search";
import Shoproductos from "./Tienda/Shoproductos";
import BrowseCategory from "./Tienda/BrowseCategory";
import ButtonCategory from "./Tienda/ButtonCategory";

const Productos = () => {
  return (
    <>
      <Search />
      <Shoproductos />
      <BrowseCategory />
      <ButtonCategory />
      <Outlet />
    </>
  );
};

export default Productos;
