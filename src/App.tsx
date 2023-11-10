import React from "react";
import { Navigation } from "./components/Layout/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Layout/home/Home";
import { Footer } from "./components/Layout/footer/Footer";
import { AllClothes } from "./components/subPages/AllClothes/AllClothes";
import { OneProductView } from "./components/subPages/SingleProduct/SingleProductView";
import { Category } from "./components/subPages/Category/Category";
import { NotFoundView } from "./components/utils/NotFoundView";
import { Login } from "./components/User/Login";
import { Register } from "./components/User/Register";
import { Basket } from "./components/Layout/basket/Basket";
import { AdProduct } from "./components/subPages/AdProduct/AdProduct";

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all_clothes" element={<AllClothes />} />
        <Route path="/products/:idOfProduct" element={<OneProductView />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/user" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/ad-product" element={<AdProduct />} />
        <Route path="/*" element={<NotFoundView />} />
      </Routes>
      <Footer />
    </>
  );
};
