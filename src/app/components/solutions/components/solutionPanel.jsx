import Image from "next/image";
export default function SolutionPanel() {
    const solutions = [
            { title: "Atención al cliente:", description: "Automatización respuestas frecuentes 24/7." },
            { title: "Recopilación de datos:", description: "Captura y medición datos de clientes." },
            { title: "Live chat:", description: "Transferencia de las conversaciones automatizadas a un asesor humano para una asistencia más personalizada." },
            { title: "Feedback:", description: "Solicitado de calificaciones a tus clientes sobre la calidad de la interacción y atención." }, 
            
        ];
    return(
        <div className="flex flex-col justify-center items-center gap-2 w-full py-10
            p-10 md:p-16 md:pl-64  md:px-16 md:mpr-30 md:-ml-80 rounded-[68px] shadow-[9px_-8px_10px_1px_gray] 
            bg-[linear-gradient(to_right,rgba(125,139,143,1)_0%,rgba(125,139,143,0)_65%,rgba(125,139,143,1)_100%)]
            "> 
            {
                solutions.map((solution, index) => (
                    <div key={index} className="flex justify-start items-center gap-5 w-full">
                        <Image       
                            loading="lazy"
                            aria-label="Logo de Check"
                            src="/icons/chequed.png"
                            alt="Logo de Check"
                            width={600}
                            height={600}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
                        /> 
                        <div className="w-full">
                            <h4 className="text-black text-sm md:text-xl font-bold uppercase">{solution.title}</h4>
                            <p className="text-black text-xs xl:text-sm">{solution.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}