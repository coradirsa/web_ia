'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSVG from '../../components/AnimatedSVG';
import AnimatedSVGMobile from '../../components/GPT';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    const updateMatch = (e) => {
      setMatches(e.matches);
    };
    
    setMatches(media.matches);
    media.addEventListener('change', updateMatch);
    
    return () => {
      media.removeEventListener('change', updateMatch);
    };
  }, [query]);

  return matches;
};

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const ContactButton = () => (
    <AnimatePresence>
      {showButton && (
        <motion.a 
          href="/contact"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          className="inline-block px-8 py-4 bg-[#1d414d] text-white text-lg font-medium 
                     hover:bg-opacity-90 transition-all duration-200 
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Trabaja con nosotros
        </motion.a>
      )}
    </AnimatePresence>
  );

  const ContactButtonStatic = () => (
    <a 
      href="/contact"
      className="hidden md:inline-block px-8 py-4 bg-[#002f3d] text-white text-lg font-medium 
                 hover:bg-opacity-90 transition-all duration-200 
                 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    >
      Trabaja con nosotros
    </a>
  );
  const CopyrightFooter = () => (
    <div className="text-center py-4 text-sm text-gray-600 ">
      © {new Date().getFullYear()} CORADIR SA. Todos los derechos reservados.
    </div>
  );

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {isMobile ? (
        // Layout móvil: SVG -> Botón
        <div className="flex flex-col items-center gap-16">
          <AnimatedSVGMobile />
          {/* <ContactButton /> */}
          <footer className="flex gap-6 flex-wrap items-center justify-center">
            <CopyrightFooter />
          </footer>
        </div>
      ) : (
        // Layout desktop: Botón -> SVG
        <div className="flex flex-col w-full">
          <div className="w-full flex justify-end mb-16">
            {/* <ContactButtonStatic /> */}
          </div>
          
          <div className="flex flex-col items-center gap-16">
            <AnimatedSVG />
            <footer className="flex gap-6 flex-wrap items-center justify-center ">
              <CopyrightFooter />
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}