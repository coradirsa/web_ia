import useScroll from "@/hooks/useScroll";
import Button from "../button";
import NavLink from "./components/navLink";
import { useMediaQuery } from "@/hooks/useMediaQuery"; 

export default function Header() {
    const navlinks = [
        { href: "#", text: "inicio" },
        { href: "#products", text: "productos" },
        { href: "#solutions", text: "soluciones" },
    ]; 
    const { scrollY } = useScroll(); 
    const isMobile = useMediaQuery("(max-width: 700px)"); 
    if(isMobile) return null; 
  return ( 
    <header className={`flex items-center justify-between container w-full h-20 gap-3 xl:gap-10 p-5 py-16 pb-10 top-0 z-50 sticky transition-all duration-300 ease-in-out
        ${scrollY > 0 ? "bg-black/30 backdrop-blur-md shadow-lg" : ""}  `}
    >
        <div className="flex items-center justify-center px-10 gap-3 z-1000">
            <img src="iacor.svg" alt="iacor-logo"className="h-16 xl:h-20"/>   
            <h1 className="text-white text-3xl xl:text-5xl font-bold">IACOR</h1>
        </div> 
        <div className="flex items-center  justify-end  w-full">
            {navlinks.map((link, index) => (
                <NavLink key={index} href={link.href} text={link.text} isBarrer={index !== navlinks.length - 1}/>
            ))}
            <Button 
                ariaLabel="Boton para acceder a la seccion de contacto"
                element={<a href="#contact" aria-label="Boton para acceder al formulario de contacto">contacto</a>}
                type="button"
                className="bg-background rounded-lg px-2 md:px-5 py-2 text-xs xl:text-sm text-white uppercase font-bold"
            />
        </div>
    </header>
  );  
};