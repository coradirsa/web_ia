'use client';
 
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home";
import Products from "./components/products/products";
import Solutions from "./components/solutions/solutions";

export default function Page() {
  return (
    <>
        <Header />
        <Home />
        <Products />
        <Solutions />
        <Contact />
        <Footer />
    </>
  );
}