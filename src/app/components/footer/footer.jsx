import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className="flex justify-between w-full container bg-blueligth py-4 px-10 rounded-t-2xl">
            <div className="flex flex-col gap-2">
                <h5 className="text-3xl uppercase font-bold text-white">iacor</h5>
                <span className="pl-2 text-lg text-white">
                    Inteligencia Artificial eficiente a tu alcance.<br/>
                    © 2025 IACOR. Todos los derechos reservados.
                </span>
                <span className="pl-2 text-lg text-white mb-4">
                    Las imaggenes mostradas son solo a titulo<br/>
                    ilustrativo y pueden diferir del producto real.
                </span>
                <span className="flex gap-3 pl-2 text-white">
                    <Facebook className="w-6 h-6" />
                    <Linkedin className="w-6 h-6" />
                    <Instagram className="w-6 h-6" />
                </span>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="text-3xl uppercase font-bold text-white">Enllaces rápidos</h5>
                <span className="pl-2 text-lg text-white">
                    <Link className="hover:underline cursor-pointer" href="#aboutus">Sobre nosotros</Link>
                </span>
                <span className="pl-2 text-lg text-white">
                    <Link className="hover:underline cursor-pointer" href="#contact">Contacto</Link>
                </span>
            </div>
            <div className="flex flex-col gap-2">
            <h5 className="text-3xl uppercase font-bold text-white">Nuestros sitios</h5>
                <span className="pl-2 text-lg text-white">
                    <a className="hover:underline cursor-pointer" href="#aboutus">CORADIR S.A</a>
                </span>
                <span className="pl-2 text-lg text-white">
                    <a className="hover:underline cursor-pointer" href="#contact">Movilidad Electrica</a>
                </span>
                <span className="pl-2 text-lg text-white">
                    <a className="hover:underline cursor-pointer" href="#contact">Coradir Homes</a>
                </span>
                <span className="pl-2 text-lg text-white">
                    <a className="hover:underline cursor-pointer" href="#contact">Energía Renovable</a>
                </span>
                <span className="pl-2 text-lg text-white">
                    <a className="hover:underline cursor-pointer" href="#contact">Coradir Seguridad</a>
                </span>
            </div>
        </footer>
    );
}