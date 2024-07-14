import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../shared/NavBar/Navbar";

import About from "../pages/About";
import Contact from "../pages/Contact";

import Search from "../components/search/Search";
import Login from "../components/login/Login";

import Home from "../home/Home";
import Productos from "../pages/Productos";
import Limpiadores from "../pages/Productos/Limpiadores";
import Tonicos from "../pages/Productos/Tonicos";
import Serums from "../pages/Productos/Serums";
import Hidrantes from "../pages/Productos/Hidrantes";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/productos" element={<Productos />}>
              <Route path="limpiadores" index element={<Limpiadores />} />
              <Route path="tonicos" element={<Tonicos />} />
              <Route path="serums" element={<Serums />} />
              <Route path="hidratantes" element={<Hidrantes />} />
            </Route>

            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes></Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
