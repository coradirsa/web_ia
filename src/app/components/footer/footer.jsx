import Image from "next/image"; 

export default function Footer() {
    //links de nuestros sitios
    const links = [
        { href: "https://www.coradir.com.ar/", text: "CORADIR S.A" },
        { href: "https://movilidad.coradir.com.ar/", text: "Movilidad Electrica" },
        { href: "https://homes.coradir.com.ar/", text: "Coradir Homes" },
        { href: "https://energia.coradir.com.ar/", text: "Energía Renovable" },
        { href: "#", text: "Coradir Seguridad" },
    ]; 
    const socialMedia = [
        { href: "https://www.facebook.com/CoradirSA/", img:"/icons/facebook.png", ariaLabel:"Logo de Facebook", alt:"Logo de Facebook" },
        { href: "#", img:"/icons/linkedin.png", ariaLabel:"Logo de LinkedIn", alt:"Logo de LinkedIn" },
        { href: "#", img:"/icons/instagram.png", ariaLabel:"Logo de Instagram", alt:"Logo de Instagram" },
    ];
    return(
        <footer className="grid text-center md:text-left grid-cols-1 gap-10  md:grid-cols-2 md:gap-2   w-full container bg-blueligth py-8 px-10 rounded-t-2xl">
            <div className="flex flex-col gap-2">
                <h5 className="text-xl xl:text-3xl uppercase font-bold text-white">iacor</h5>
                <span className="md:pl-2 text-sm xl:text-lg text-white">
                    Inteligencia Artificial eficiente a tu alcance.<br/>
                    © 2025 IACOR. Todos los derechos reservados.
                </span>
                <span className="md:pl-2 text-sm xl:text-lg text-white mb-4">
                    Las imágenes mostradas son solo a titulo<br/>
                    ilustrativo y pueden diferir del producto real.
                </span>
                <span className="flex items-center justify-center md:justify-start gap-3 pl-2 text-white">
                    {
                        socialMedia.map((social, index) => (
                            <a href={social.href} key={`social-${index}`} className="hover:shadow-[0_1px_5px_rgba(255,255,255,0.3)]">
                                <Image       
                                    loading="lazy"
                                    aria-label={social.ariaLabel}
                                    src={social.img}
                                    alt={social.alt}
                                    width={600}
                                    height={600}
                                    className="w-6 h-6"
                                />
                            </a>
                        ))
                    }
                </span>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="text-xl xl:text-3xl uppercase font-bold text-white">Nuestros sitios</h5>
                {
                    links.map((link, index) => (
                        <span key={index} className="md:pl-2 text-sm xl:text-lg text-white">
                            <a className="hover:underline cursor-pointer" href={link.href}>{link.text}</a>
                        </span>
                    ))
                }
            </div>
        </footer>
    );
}  