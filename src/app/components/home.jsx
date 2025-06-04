import Button from "./button";
import Image from "next/image";
export default function Home() {
    return (
        <section id="home" className="w-full min-h-[30vh] md:min-h-[100vh] md:-mt-32  pt-40 px-3 md:px-10 xl:px-20 
            flex justify-start items-center py-10  
            relative
        ">
            <Image
              loading="lazy"
              aria-label="Fondo banner"
              src="/img/01.webp"
              alt="Fondo banner"
              width={1000}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-1 flex flex-col gap-2 md:gap-5  md:w-1/2">
                <h2 className="text-white text-xl sm:text-4xl md:text-5xl w-full font-bold tracking-tighter uppercase" 
                    style={{ textShadow: "3px 3px 5px rgba(0,0,0,0.9)" }}
                >
                    Dominá el futuro con IA:<br/>
                    Algorimos que venden,<br/>
                    resultados que escalan.
                </h2>
                <p className="text-white text-xs sm:text-xl mb-10  ">Desarrollamos soluciones inteligentes que responden por vos. <br/>
                Inteligencia Artificial eficiente a tu alcance.</p>
                <Button 
                    ariaLabel="Boton para acceder a mas información sobre inteligencia artificial"
                    element={<a href="#contact" aria-label="Boton para acceder a mas información sobre inteligencia artificial">mas información</a>}
                    type="button"
                    className="hidden md:block bg-gray rounded-full px-0 py-2 text-white text-md w-52 hover:bg-grayDark shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                />
            </div>
        </section>
    );
}