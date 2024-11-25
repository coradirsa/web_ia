'use client'
import React, { useState } from 'react';
import { Montserrat } from 'next/font/google'
import { Upload, FileUp } from 'lucide-react';
import Link from 'next/link';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['800', '700'],
  variable: '--font-montserrat'
})

const CopyrightFooter = () => (
  <div className="text-center py-4 text-sm text-gray-600 ">
    © {new Date().getFullYear()} CORADIR SA. Todos los derechos reservados.
  </div>
);

const ContactForm = () => {
    const [cvFileName, setCvFileName] = useState('');
    const [projectFileName, setProjectFileName] = useState('');
  
    const handleCvChange = (e) => {
      setCvFileName(e.target.files[0]?.name || '');
    };
  
    const handleProjectChange = (e) => {
      setProjectFileName(e.target.files[0]?.name || '');
    };

  const StyledHeading = () => (
    <div className="text-center mb-16">
      <h1 className={`uppercase font-light text-white text-[50px]
                     border-b-2 border-[#00B7FF] pb-4
                     
                     after:bg-[#3344ff] ${montserrat.className}`}>
        Trabajá con nosotros
      </h1>
    </div>
  );

  const BackButton = () => (
    <Link 
      href="/"
      className="inline-flex items-center gap-2 text-[#00B7FF] hover:text-[#3344ff] mt-20"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-transform group-hover:-translate-x-1"
      >
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Volver al inicio
    </Link>
  );

  return (
    <div className="max-w-[900px] mx-auto pt-8">

      <StyledHeading />
      <div className="max-w-[600px] mx-auto bg-[#111111]/50">
      <form className="flex flex-wrap">
        {/* Nombre */}
        <div className="w-full md:w-1/2 p-4">
          <input 
            type="text"
            id="name"
            required
            placeholder="Nombre"
            className="block w-full p-4 bg-transparent text-white border-b-2 border-[#00B7FF] 
                       transition-all duration-300 focus:border-b-2 focus:border-[#828282]
                       valid:border-[#3344ff] outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Apellido */}
        <div className="w-full md:w-1/2 p-4">
          <input 
            type="text"
            id="lastname"
            required
            placeholder="Apellido"
            className="block w-full p-4 bg-transparent text-white border-b-2 border-[#00B7FF] 
                       transition-all duration-300 focus:border-b-2 focus:border-[#828282]
                       valid:border-[#3344ff] outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Email y Teléfono en la misma fila */}
        <div className="w-full md:w-1/2 p-4">
          <input 
            type="email"
            id="email"
            required
            placeholder="Correo electrónico"
            className="block w-full p-4 bg-transparent text-white border-b-2 border-[#00B7FF] 
                       transition-all duration-300 focus:border-b-2 focus:border-[#828282]
                       valid:border-[#3344ff] outline-none placeholder:text-gray-500"
          />
        </div>

        <div className="w-full md:w-1/2 p-4">
          <input 
            type="tel"
            id="phone"
            required
            placeholder="Teléfono"
            className="block w-full p-4 bg-transparent text-white border-b-2 border-[#00B7FF] 
                       transition-all duration-300 focus:border-b-2 focus:border-[#828282]
                       valid:border-[#3344ff] outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Portfolio Link */}
        <div className="w-full md:w-1/2 p-4">
          <input 
            type="url"
            id="linkedin"
            required
            placeholder="Perfil de LinkedIn"
            className="block w-full p-4 bg-transparent text-white border-b-2 border-[#00B7FF] 
                       transition-all duration-300 focus:border-b-2 focus:border-[#828282]
                       valid:border-[#3344ff] outline-none placeholder:text-gray-500"
          />
        </div>

        <div className="w-full md:w-1/2 p-4">
          <input 
            type="url"
            id="portfolio"
            required
            placeholder="Link a tu portfolio"
            className="block w-full p-4 bg-transparent text-white border-b-2 border-[#00B7FF] 
                       transition-all duration-300 focus:border-b-2 focus:border-[#828282]
                       valid:border-[#3344ff] outline-none placeholder:text-gray-500"
          />
        </div>

        <div className="w-full p-4 relative group">
          <div className="relative">
            <input 
              type="file"
              id="cv"
              onChange={handleCvChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="w-full p-4 border-b-2 border-[#00B7FF] transition-all duration-300
                          group-hover:border-[#3344ff] group-focus-within:border-[#828282] 
                          min-h-[4rem] flex items-center justify-between bg-[#111111]/30">
              <div className="flex items-center gap-3">
                <Upload 
                  size={20} 
                  className="text-[#00B7FF] group-hover:text-[#3344ff] transition-colors duration-300" 
                />
                <span className="text-gray-500">
                  {cvFileName || 'Cargá tu CV'}
                </span>
              </div>
              <span className="text-xs text-gray-500 bg-[#1d414d]/20 py-1 px-2">
                Seleccionar archivo
              </span>
            </div>
          </div>
        </div>

        {/* Proyecto File Input */}
        <div className="w-full p-4 relative group">
          <div className="relative">
            <input 
              type="file"
              id="project"
              onChange={handleProjectChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="w-full p-4 border-b-2 border-[#00B7FF] transition-all duration-300
                          group-hover:border-[#3344ff] group-focus-within:border-[#828282] 
                          min-h-[4rem] flex items-center justify-between bg-[#111111]/30">
              <div className="flex items-center gap-3">
                <FileUp 
                  size={20} 
                  className="text-[#00B7FF] group-hover:text-[#3344ff] transition-colors duration-300" 
                />
                <span className="text-gray-500">
                  {projectFileName || 'Cargá tu proyecto'}
                </span>
              </div>
              <span className="text-xs text-gray-500 bg-[#1d414d]/20 py-1 px-2">
                Seleccionar archivo
              </span>
            </div>
          </div>
        </div>

        {/* Botón Enviar */}
        <div className="w-full p-4">
          <input 
            type="submit" 
            value="Enviar"
            className="w-full py-4 text-[#00B7FF] cursor-pointer transition-all duration-300
                       shadow-[0_0_0_2px_#00B7FF] hover:bg-[#3344ff] hover:text-white hover:shadow-none
                       active:bg-[#2233dd] active:scale-[0.97]"
          />
        </div>
      </form>
      </div>
      <BackButton />
      <footer className="flex gap-6 flex-wrap items-center justify-center ">
              <CopyrightFooter />
            </footer>
    </div>

  );
};

export default ContactForm;