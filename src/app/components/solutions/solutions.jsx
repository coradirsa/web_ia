import Image from "next/image";
import CardSolutions from "./components/cardSolutions"; 
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
            description: "Se conecta con diferentes plataformas o eplicaciones para una gestion integreal."
        },
    ];
    const solutions = [
        { title: "Atención al cliente:", description: "Automatización frecuentes 24/7" },
        { title: "Recopilación de datos:", description: "Captura y medición datos de clientes" },
        { title: "Live chat:", description: "Transferencia de las conversaciones automatizadas a un asesor humano para una asistencia más personalizada" },
        { title: "Feedback:", description: "Solicitado de calificaciones a tus clientes sobre la calidad de la interacción y atención" }, 
        
    ]
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
            <section className="w-full container bg-white p-5 md:p-16 gap-5 flex flex-col justify-center items-center">
                <h3 className="text-background text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase w-full">Soluciones infinitas</h3> 
                <div className="relative flex items-center justify-start p-5 w-full overflow-hidden">
                    <Image 
                        loading="lazy"
                        ariaLabel="Imagen de chat con un chatbot"
                        src="/img/chat.webp"
                        alt="Imagen de chat con un chatbot"
                        width={400}
                        height={400}
                        className="relative hidden md:block"
                    />
                    <div className="flex flex-col justify-center items-center md:pl-72 gap-2 w-full py-10
                        p-10 md:px-16 md:mpr-30 md:-ml-80 rounded-[68px] shadow-[9px_-8px_10px_1px_gray] fondo-gradiente-gris-transparent
                        bg-[linear-gradient(to_right,rgba(125,139,143,1)_0%,rgba(125,139,143,0)_65%,rgba(125,139,143,1)_100%)]
                        "> 
                        {
                            solutions.map((solution, index) => (
                                <div key={index} className="flex justify-start items-center gap-5 w-full">
                                    <Image       
                                        loading="lazy"
                                        ariaLabel="Logo de Check"
                                        src="/icons/chequed.png"
                                        alt="Logo de Check"
                                        width={600}
                                        height={600}
                                        className="w-14 h-14 md:w-24 md:h-24"
                                    /> 
                                    <div className="w-full">
                                        <h4 className="text-black text-sm md:text-2xl font-bold uppercase">{solution.title}</h4>
                                        <p className="text-black text-xs md:text-sm">{solution.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </section>
    );
}