import React from "react";
import { Navigation } from "./components/Layout/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Layout/home/Home";
import { Footer } from "./components/Layout/footer/Footer";
import { AllClothes } from "./components/subPages/AllClothes/AllClothes";
import { OneProductView } from "./components/subPages/SingleProduct/SingleProductView";
import { Category } from "./components/subPages/Category/Category";
import { NotFoundView } from "./components/utils/NotFoundView";

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all_clothes" element={<AllClothes />} />
        <Route path="/products/:idOfProduct" element={<OneProductView />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/*" element={<NotFoundView />} />
      </Routes>
      <Footer />
    </>
  );
};
