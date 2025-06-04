import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className="grid text-center md:text-left grid-cols-1 gap-10  md:grid-cols-3 md:gap-2 w-full container bg-blueligth py-8 px-10 rounded-t-2xl">
            <div className="flex flex-col gap-2">
                <h5 className="text-xl xl:text-3xl uppercase font-bold text-white">iacor</h5>
                <span className="md:pl-2 text-sm xl:text-lg text-white">
                    Inteligencia Artificial eficiente a tu alcance.<br/>
                    © 2025 IACOR. Todos los derechos reservados.
                </span>
                <span className="md:pl-2 text-sm xl:text-lg text-white mb-4">
                    Las imaggenes mostradas son solo a titulo<br/>
                    ilustrativo y pueden diferir del producto real.
                </span>
                <span className="flex items-center justify-center md:justify-start gap-3 pl-2 text-white">
                    <Image       
                        loading="lazy"
                        ariaLabel="Logo de Facebook"
                        src="/icons/facebook.png"
                        alt="Logo de Facebook"
                        width={600}
                        height={600}
                        className="w-6 h-6"
                    />
                   <Image       
                        loading="lazy"
                        ariaLabel="Logo de LinkedIn"
                        src="/icons/linkedin.png"
                        alt="Logo de LinkedIn"
                        width={600}
                        height={600}
                        className="w-6 h-6"
                    />
                    <Image       
                        loading="lazy"
                        ariaLabel="Logo de Instagram"
                        src="/icons/instagram.png"
                        alt="Logo de Instagram"
                        width={600}
                        height={600}
                        className="w-6 h-6"
                    />
                </span>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="text-xl xl:text-3xl uppercase font-bold text-white">Enllaces rápidos</h5>
                <span className="md:pl-2 text-sm xl:text-lg text-white">
                    <Link className="hover:underline cursor-pointer" href="#aboutus">Sobre nosotros</Link>
                </span>
                <span className="md:pl-2 text-sm xl:text-lg text-white">
                    <Link className="hover:underline cursor-pointer" href="#contact">Contacto</Link>
                </span>
            </div>
            <div className="flex flex-col gap-2">
            <h5 className="text-xl xl:text-3xl uppercase font-bold text-white">Nuestros sitios</h5>
                <span className="md:pl-2 text-sm xl:text-lg text-white">
                    <a className="hover:underline cursor-pointer" href="#aboutus">CORADIR S.A</a>
                </span>
                <span className="md:pl-2 text-sm xl:text-lg text-white">
                    <a className="hover:underline cursor-pointer" href="#contact">Movilidad Electrica</a>
                </span>
                <span className="md:pl-2 text-sm xl:text-lg text-white">
                    <a className="hover:underline cursor-pointer" href="#contact">Coradir Homes</a>
                </span>
                <span className="md:pl-2 text-sm xl:text-lg text-white">
                    <a className="hover:underline cursor-pointer" href="#contact">Energía Renovable</a>
                </span>
                <span className="md:pl-2 text-sm xl:text-lg text-white">
                    <a className="hover:underline cursor-pointer" href="#contact">Coradir Seguridad</a>
                </span>
            </div>
        </footer>
    );
}