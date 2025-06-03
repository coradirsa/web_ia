'use client';

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home";
import Products from "./components/products/products";

export default function Page() {
  return (
    <>
        <Header />
        <Home />
        <Products />
        <Footer />
    </>
  );
}