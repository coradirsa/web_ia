import { motion } from 'framer-motion'; 
export default function ClickMe() {
    return (
        <div className="flex items-center justify-center absolute bottom-7 right-[4.8em] sm:bottom-[2.2em] sm:right-[5.4em] z-1 gap-2 md:right-[5.6em]">
            <motion.div
                animate={{
                x: [0, 20, 0], // sube y baja
                }}
                transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
                }} 
                aria-hidden="true"
            >
                <span role="img" aria-label="finger" className="text-5xl mt-[1em]" >👉</span>
            </motion.div>
            {/* Ondas/Aureolas */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{
                scale: [1, 1.6 , 1.5],
                opacity: [0.8, 0 , 0.3]
                }}
                transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
                }}
                aria-hidden="true"
                style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.8)", 
                }}
            /> 
        </div>
    );
}