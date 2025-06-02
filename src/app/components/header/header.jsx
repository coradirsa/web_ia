import useScroll from "@/hooks/useScroll";
import Button from "../button";
import NavLink from "./components/navLink";

export default function Header() {
    const navlinks = [
        { href: "#", text: "inicio" },
        { href: "#products", text: "productos" },
        { href: "#solutions", text: "soluciones" },
        { href: "#aboutus", text: "nosotros" },
    ]; 
    const { scrollY } = useScroll();
  return (
    <header className={`flex items-center justify-center container w-full h-20 gap-10 p-5 py-14 top-0 z-50 sticky
        ${scrollY > 0 ? "bg-background/70 backdrop-blur-md shadow-lg" : ""}`}

    >
        <div className="flex items-center justify-center px-10 gap-3">
            <img src="iacor.svg" alt="iacor-logo"className="h-20"/>   
            <h1 className="text-white text-5xl font-bold">IACOR</h1>
        </div>
        <div className="flex items-center gap-10">
            {navlinks.map((link, index) => (
                <NavLink key={index} href={link.href} text={link.text} isBarrer={index !== navlinks.length - 1}/>
            ))}
            <Button 
                element="contacto"
                type="button"
                className="bg-background rounded-lg px-5 py-2 text-white uppercase font-bold"
            />
        </div>
    </header>
  );  
};