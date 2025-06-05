import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion'; 
import ClickMe from "./clickme";
import SolutionPanel from "./solutionPanel";
export default function InfiniteS() {
    const [isClicked, setIsClicked] = useState(false);
    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
    };
        
    const revealVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0.8,
        rotateY: -15
    },
    visible: { 
        opacity: 1, 
        scale: 1,
        rotateY: 0,
        transition: {
        duration: 0.6,
        ease: "easeOut"
        }
    },
    exit: { 
        opacity: 0, 
        scale: 0.8,
        rotateY: 15,
        transition: {
        duration: 0.3
        }
    }
    };
    return(
        <section className="w-full container bg-white p-5 md:p-16 gap-5 flex flex-col justify-center items-center">
            <h3 className="text-background text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase w-full">Soluciones infinitas</h3> 
            {/* Boton para dispositivos moviles */}
            <div className="relative w-full md:hidden flex items-center justify-center perspective-1000 py-5">
                <motion.button
                    onClick={() => setIsClicked(!isClicked)}
                    variants={buttonVariants}
                    initial="visible"
                    animate={isClicked ? "hidden" : "visible"}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ duration: 0.2 }}
                    style={{ zIndex: isClicked ? 1 : 2 }}
                >
                    <div className="relative w-full h-full flex items-center justify-center "> 
                        <ClickMe />
                        <Image 
                            loading="lazy"
                            aria-label="Imagen de chat con un chatbot"
                            src="/img/chat.webp"
                            alt="Imagen de chat con un chatbot"
                            width={400}
                            height={400}
                            className="w-full h-full"
                        /> 
                    </div>
                </motion.button> 
                {/* Componente que aparece desde atrás */}
                <AnimatePresence mode="wait">
                    {isClicked && ( 
                    <motion.div
                        onClick={() => setIsClicked(false)}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap="tap" 
                        transition={{ duration: 0.2 }}
                        exit="exit" 
                        style={{ zIndex: 2 }}
                    >
                        <SolutionPanel />
                    </motion.div>
                    )}
                </AnimatePresence>  
            </div>
            {/* Boton para dispositivos desktop */}
            <div className="relative hidden md:flex items-center justify-start p-5 w-full xl:px-28 overflow-hidden">
                    <Image 
                        loading="lazy"
                        aria-label="Imagen de chat con un chatbot"
                        src="/img/chat.webp"
                        alt="Imagen de chat con un chatbot"
                        width={400}
                        height={500}
                        className="relative hidden md:block"
                    /> 
                    <SolutionPanel />
            </div>

        </section>
    )
}