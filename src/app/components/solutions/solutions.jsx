import CardSolutions from "./components/cardSolutions"; 
import InfiniteS from "./components/infiniteS";

export default function Solutions() {
    const cards = [
        {
            icon: "/icons/ahorro2.png",
            title: "Ahorro de tiempo",
            description: "Libera tiempo valioso a tu equipo para que pueda ocuparse de interacciones mas complejas."
        },
        {
            icon: "/icons/personalizacion2.png",
            title: "100% personalizable",
            description: "Se adapta completamente a tus necesidades, objetivos e identidad de marca."
        },
        {
            icon: "/icons/automatizacion.png",
            title: "Automatización de respuestas",
            description: "Rsponde instantáneamente a preguntas frecuentes, incluso fuera del horario comercial."
        },
        {
            icon: "/icons/integracion.png",
            title: "Integración completa",
            description: "Se conecta con diferentes plataformas o aplicaciones para una gestión integral."
        },
    ];
    
    return(
        <section id="solutions" className="flex flex-col justify-start items-center w-full container bg-white py-15">
            <h3 className="text-white bg-background text-2xl sm:text-3xl md:text-5xl py-5
            font-bold tracking-tighter uppercase w-full text-center shadow-[0_-10px_15px_rgba(0,0,0,0.4)]"
            >Beneficios al instante</h3> 
            <section className="bg-white w-full container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10 2xl:gap-20 py-16 px-20 sm:px-32 md:px-20 xl:px-20">
                {
                    cards.map((card, index) => (
                        <CardSolutions 
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))
                }
            </section>
            <InfiniteS />
        </section>
    );
}