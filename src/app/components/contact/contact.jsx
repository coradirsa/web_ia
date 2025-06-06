import { Controller, useForm } from "react-hook-form";
import { contactSchema } from "./contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import Button from "../button";
import Image from "next/image";

export default function Contact() {
    const inputs = [
        { name: 'name', placeholder: 'Nombre completo *', type: 'text' },
        { name: 'email', placeholder: 'Correo electrónico *', type: 'email' },
        { name: 'phone', placeholder: 'Teléfono (opcional)', type: 'tel' },
        { name: 'website', placeholder: 'https://www.sitio.com (opcional)', type: 'url' },
    ];
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });
    const form = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            website: "",
            description: "",
        },
        mode: "onChange",
        reValidateMode: "onChange",
    })
    const { handleSubmit, formState: { errors } , control} = form;
    const onSubmit = async (data) => {
        setIsSubmitting(true);
        const dataToSend = {
            name: data.name.trim(),
            email: data.email.trim().toLowerCase(),
            phone: data.phone.trim() || null,
            website: data.website.trim() || null,
            description: data.description.trim() || null,
            timestamp: new Date().toISOString(),
            source: 'website_chatbot_form'
          };
        try { 
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend)
            });
        
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            setSubmitMessage({
                type: 'success',
                text: '¡Gracias por tu interés! Hemos recibido tu solicitud y te contactaremos pronto.',
            });
        } catch (error) {
            console.error('Error al enviar datos a n8n:', error);
            setSubmitMessage({
                type: 'error',
                text: 'Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.',
            });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setSubmitMessage({ type: '', text: '' });
            }, 5000);
        }
    };
    const inputRefs = {
        name: useRef(null),
        email: useRef(null),
        phone: useRef(null),
        website: useRef(null),
        description: useRef(null),
    };
    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setSubmitMessage({
                type: 'error',
                text: 'Por favor corrige los errores antes de enviar.',
            });
          const firstError = Object.keys(errors)[0];
          if (inputRefs[firstError] && inputRefs[firstError].current) {
            inputRefs[firstError].current.focus();
          }
        }
    }, [errors]);
    return (
        <section id="contact" className="flex flex-col justify-center items-center w-full container bg-background py-16 px-5 gap-5"> 
                <h3 className="text-white text-center text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase w-full">Solicitá tu chatbot</h3>
                <h4 className="text-gray text-center text-sm sm:text-lg md:text-xl md:px-44 font-bold xs:mb-2 w-full">
                    Completá el formulario para recibir información sobre nuestros servicios de chatbot inteligente. Un representante de CORADIR IA te contactará a la brevedad.
                </h4> 
            <div className="w-full flex flex-col justify-center items-center md:max-w-[700px] bg-[#111]/50 p-6 rounded-xl">
                {submitMessage.text && (
                    <div className={`mb-6 p-4 rounded-md ${submitMessage.type === 'success' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                        {submitMessage.text}
                    </div>
                )}
                
                <form onSubmit={handleSubmit( onSubmit )} className="w-full flex flex-col gap-5 ">
                    {inputs.map(({ name, placeholder, type }) => (
                        <div className="w-full p-4" key={name}>
                            <Controller 
                                name={name} 
                                control={control} 
                                render={({ field }) => (
                                <input
                                    type={type}
                                    name={name}
                                    ref={inputRefs[name]}
                                    value={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    placeholder={placeholder}
                                    className={`block w-full p-2 bg-transparent text-white border-b-2 outline-none placeholder:text-gray-500 transition-all ${
                                        errors[name] 
                                            ? 'border-red-500 focus:border-red-400' 
                                            : 'border-white focus:border-[#828282]'
                                    }`}
                                />
                            )}
                            />
                            <p className="text-red-400 text-sm mt-2 h-5">
                                {errors[name] && (errors[name].message)}
                            </p>
                        </div>
                    ))}

                    {/* Descripción */}
                    <div className="w-full p-4">
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <>
                                <textarea
                                    name="description"
                                    value={field.value}
                                    onChange={field.onChange}
                                    rows="4"
                                    placeholder="¿Cómo te gustaría que te ayudemos con un chatbot? (opcional)"
                                    className={`block w-full bg-transparent p-2 text-white border-b-2 outline-none placeholder:text-gray-500 resize-none transition-all
                                        ${errors.description 
                                        ? 'border-red-500 focus:border-red-400' 
                                        : 'border-white focus:border-[#828282]'}
                                    `}
                                    ref={inputRefs.description}
                                />
                                <p className="text-red-400 text-sm mt-2 h-5"> {errors.description && (errors.description.message)}</p>
                                <p className="text-gray  text-xs mt-2">
                                Máximo 500 caracteres ({field.value.length}/500)
                                </p> 
                                </>
                            )}
                        />
                    </div>

                    {/* Botón de envío */}
                    <div className="w-full flex items-center justify-center">
                        <Button
                            ariaLabel="Boton para enviar solicitud de chatbot"
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-white rounded-full px-1 sm:px-5 py-3 w-56 text-background sm:h-10 text-xs sm:text-sm hover:bg-white/80 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]"
                            element={ isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
                        />
                    </div>
                </form>
            </div>
            
            
        </section>
    );
}