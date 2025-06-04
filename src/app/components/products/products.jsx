import Image from "next/image";
import Button from "../button";

export default function Products() {
    return(
        <section id="products" className="flex flex-col justify-start items-center w-full  bg-white p-5 xs:p-10 xs:gap-4 py-15">
            <h3 className="text-background text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase w-full">Explorá la ia conversacional</h3>
            <h4 className="text-gray text-lg sm:text-xl md:text-3xl font-bold italic uppercase xs:mb-2 w-full">Chatbot inteligente</h4>
            <div className="flex flex-col items-center xl:flex-row justify-center md:justify-between w-full py-5 xs:py-10">
                <div className="md:1/3 xl:w-1/2 mb-10 xl:mb-0 flex flex-col justify-center ">
                    <p className="text-black text-xs sm:text-xl lg:text-2xl px-3 py-10 xs:p-5 sm:p-10 border-l-[1px] border-r-[1px] border-gray text-left rounded-3xl -m-3 sm:-mb-4 box-fade-vertical">
                        Mejorá la comunicación con tus clientes de una forma más eficiente de compra y asegurá tu éxito.<br/>
                        Diseñá tu ChatBot acorde a tus necesidades y marcá la diferencia ahora.
                    </p>
                    <Button 
                        ariaLabel="Boton para acceder a la seccion de contacto"
                        element="Quiero un chatbot" 
                        type="button" 
                        className="relative bg-background rounded-full px-1 sm:px-5 py-1 w-44 sm:w-56 text-white sm:h-10 ml-5 sm:ml-16 text-xs sm:text-sm hover:bg-black hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]"
                    />
                </div>
                <Image 
                    ariaLabel="Mujer con telefono"
                    src="/img/woman-whit-phone.webp"
                    alt="Mujer con telefono"
                    width={600}
                    height={600}
                    className="rounded-3xl shadow-[9px_-8px_10px_1px_gray]"
                />
            </div>
        </section>
    );
}