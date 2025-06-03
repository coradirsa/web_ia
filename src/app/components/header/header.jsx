import useScroll from "@/hooks/useScroll";
import Button from "../button";
import NavLink from "./components/navLink";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";

export default function Header() {
    const navlinks = [
        { href: "#", text: "inicio" },
        { href: "#products", text: "productos" },
        { href: "#solutions", text: "soluciones" },
        { href: "#aboutus", text: "nosotros" },
    ]; 
    const { scrollY } = useScroll(); 
    const isMobile = useMediaQuery("(max-width: 700px)"); 
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <header className={`flex items-center justify-between container w-full gap-3 xl:gap-10 p-5 py-5 top-0 z-50 sticky transition-all duration-300 ease-in-out
        ${scrollY > 0 && !menuOpen ? "bg-black/30 backdrop-blur-md shadow-lg" : ""}
        ${isMobile ? "h-16" : "h-20"}`}

    >
        <div className="flex items-center justify-center px-10 gap-3 z-1000">
            <img src="iacor.svg" alt="iacor-logo"className="h-16 xl:h-20"/>   
            <h1 className="text-white text-3xl xl:text-5xl font-bold">IACOR</h1>
        </div>
        {
            !isMobile ? (
                <div className="flex items-center gap-3 xl:gap-10">
                    {navlinks.map((link, index) => (
                        <NavLink key={index} href={link.href} text={link.text} isBarrer={index !== navlinks.length - 1}/>
                    ))}
                    <Button 
                        element="contacto"
                        type="button"
                        className="bg-background rounded-lg px-2 md:px-5 py-2 text-xs xl:text-sm text-white uppercase font-bold"
                    />
                </div>
            ) : (
                <div className="flex items-center">
                    {/* Botón hamburguesa */}
                    <button
                    className="relative w-10 h-10 flex flex-col justify-center items-center z-50"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Abrir menú"
                    >
                        <span className={`block h-1 w-8 bg-white transition-all rounded-full duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`block h-1 w-8 bg-white my-1 transition-all rounded-full duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block h-1 w-8 bg-white transition-all rounded-full duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 " : ""}`}></span>
                    </button>
            
                    
                </div>
            )
        }
        
    </header>
    {/* Menú desplegable */}
    <nav className={`fixed top-0 right-0 h-full w-full bg-background  shadow-lg flex flex-col items-center justify-center gap-6 transition-transform duration-300 z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    {navlinks.map((link, index) => (
                        <a
                        key={index}
                        href={link.href}
                        className="text-white text-lg font-bold uppercase py-2"
                        onClick={() => setMenuOpen(false)}
                        >
                        {link.text}
                        </a>
                    ))}
                    <Button
                        element="contacto"
                        type="button"
                        className="bg-white rounded-lg px-5 py-2 text-background uppercase font-bold"
                    />
                    </nav>
                    {/* Fondo oscuro detrás del menú */}
                    {menuOpen && (
                    <div
                        className="absolute w-full h-100vh inset-0"
                        onClick={() => setMenuOpen(false)}
                    />
                    )}
    </>
  );  
};