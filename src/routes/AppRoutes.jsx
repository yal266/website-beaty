import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../shared/NavBar/Navbar";

import About from "../pages/About";
import Servicios from "../pages/Servicios";
import Contact from "../pages/Contact";


import Search from "../components/search/Search";
import Login from "../components/login/Login";

import Home from "../home/Home";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Servicios />} />

            <Route path="/contact" element={<Contact />} />
            
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
