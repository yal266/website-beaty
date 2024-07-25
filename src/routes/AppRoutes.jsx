import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavbarMain from "../app/ui/hook/NavbarMain";
import Home from "../app/ui/pages/home/Home";
import About from "../app/ui/pages/About";
import Contact from "../app/ui/pages/Contact";
import Productos from "../app/ui/pages/Productos";
import Limpiadores from "../app/ui/pages/Productos/Limpiadores";
import Tonicos from "../app/ui/pages/Productos/Tonicos";
import Serums from "../app/ui/pages/Productos/Serums";
import Hidrantes from "../app/ui/pages/Productos/Hidrantes";
import UseLogin from "../app/ui/auth/login/UseLogin";
import Search from "../app/ui/components/common/search/Search";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarMain />
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
            <Route path="/login" element={<UseLogin />} />
          </Routes>
          <Routes></Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
