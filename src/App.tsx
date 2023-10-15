import React from "react";
import { Navigation } from "./components/Layout/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Layout/home/Home";
import { Footer } from "./components/Layout/footer/Footer";

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};
