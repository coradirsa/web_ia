import Image from "next/image";
import Button from "../button";

export default function Products() {
    return(
        <section id="products" className="flex flex-col justify-start items-center w-full bg-white p-5 px-8 md:px-10 xl:px-20 xs:gap-4  md:py-24">
            <h3 className="text-background text-xl sm:text-3xl md:text-4xl xl:text-5xl text-center md:text-start font-bold tracking-tighter uppercase w-full">Explorá la ia conversacional</h3>
            <h4 className="text-gray text-xs sm:text-xl md:text-2xl text-center md:text-start font-bold italic uppercase  mb-4 md:mb-2 w-full">Chatbots inteligentes para atenciòn y ventas 24/7</h4>
            <div className="grid grid-cols-2  md:gap-10  w-full py-5">
                <div className="flex flex-col justify-center grid-rows-10 ">
                    <p className="text-black text-sm lg:text-2xl md:px-3 p-5 border-l-[1px] border-r-[1px] border-gray text-left pr-10   rounded-3xl -m-3 sm:-mb-4 box-fade-vertical py-8 tracking-wide">
                        <span className="block -mr-5">Mejorá la comunicación con tus clientes de una forma más eficiente de compra y asegurá tu éxito.</span><br className="md:hidden"/>
                        <span className="w-[90%] xl:w-[100%] block">Diseñá tu ChatBot acorde a tus necesidades y marcá la diferencia ahora.</span>
                    </p>
                    <Button 
                        ariaLabel="Boton para acceder a la seccion de contacto"
                        element={<a href="#contact" aria-label="Boton para acceder a mas información sobre inteligencia artificial">Quiero un chatbot</a>} 
                        type="button" 
                        className="hidden md:block relative bg-gray rounded-full px-1 sm:px-5 py-1 w-56 text-white sm:h-10 ml-5 sm:ml-16 text-md hover:bg-grayDark shadow-[0_-5px_5px_rgba(0,0,0,0.4)]"
                    />
                </div>
                <span className="grid-rows-2 h-full md:hidden"></span>
                <span className="grid-rows-2 h-full md:hidden"></span> 
                <a href="#contact" className="relative grid-rows-10 h-full -mt-[35%] sm:-mt-[25%] -ml-[25%] sm:-ml-[10%] md:-mt-0 md:-ml-0"> 
                        <Image 
                        loading="lazy"
                        aria-label="Mujer con telefono"
                        src="/img/woman-whit-phone.webp"
                        alt="Mujer con telefono"
                        width={600}
                        height={600}
                        className="w-full h-[10em] md:h-[12em] xl:w-[600px] xl:h-[300px] rounded-[20px] xl:rounded-[56px] shadow-[3px_-2px_5px_1px_gray] md:shadow-[9px_-8px_10px_1px_gray]"
                    />
                    <span 
                        className="text-center uppercase font-bold flex items-center justify-center -mt-10 md:hidden relative bg-gradient-to-t from-grayDark via-grayDark to-transparent rounded-bl-[20px] rounded-br-[20px] xl:px-1 py-1 w-full xl:w-56 text-white h-10 text-xs sm:text-md xl:text-md"
                    >Quiero un chatbot</span>
                </a> 
            </div> 
        </section>
    );
}