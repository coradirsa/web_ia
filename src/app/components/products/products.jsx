import Image from "next/image";
import Button from "../button";

export default function Products() {
    return(
        <section id="products" className="flex flex-col justify-start items-center w-full  bg-white p-10 gap-4">
            <h3 className="text-background text-5xl md:text-6xl font-bold tracking-tighter uppercase w-full">Explorá la ia conversacional</h3>
            <h4 className="text-gray text-2xl md:text-3xl font-bold italic uppercase mb-2 w-full">Chatbot inteligente</h4>
            <div className="flex flex-col items-center xl:flex-row justify-center md:justify-between w-full">
                <div className="md:w-1/2 mb-10 xl:mb-0">
                    <p className="text-black text-xl md:text-2xl p-10 border-l-[1px] border-r-[1px] border-gray text-left rounded-3xl -mb-4 box-fade-vertical">
                        Mejorá la comunicación con tus clientes de una forma más eficiente de compra y asegurá tu éxito.<br/>
                        Diseñá tu ChatBot acorde a tus necesidades y marcá la diferencia ahora.
                    </p>
                    <Button 
                        element="Quiero un chatbot" 
                        type="button" 
                        className="relative bg-gray rounded-full px-5 py-2 text-white uppercase font-bold h-10 ml-16"
                    />
                </div>
                <Image 
                    src="/img/woman-whit-phone.webp"
                    alt="woman-whit-phone"
                    width={500}
                    height={500}
                    className="rounded-3xl shadow-[9px_-8px_10px_1px_gray]"
                />
            </div>
        </section>
    );
}