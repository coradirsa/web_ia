'use client';
import { useState } from 'react';

const StyledHeading = () => (
  <div className="text-center mb-16">
    <h1 className={`uppercase font-light text-white text-[50px] border-b-2 border-[#00B7FF] pb-4 `}>
      Solicitá tu Chatbot
    </h1>
    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
      Completá el formulario para recibir información sobre nuestros servicios de chatbot inteligente. Un representante de CORADIR IA te contactará a la brevedad.
    </p>
  </div>
);


const ChatbotRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });
  const [fieldErrors, setFieldErrors] = useState({});

  // 📧 Validación de email con expresión regular
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // 📱 Validación de teléfono con expresión regular
  const validatePhone = (phone) => {
    // Solo números, espacios, guiones, paréntesis y el símbolo +
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, ''); // Remover caracteres no numéricos
    return phoneRegex.test(phone) && cleanPhone.length >= 8 && cleanPhone.length <= 15;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Limpiar errores del campo cuando el usuario empieza a escribir
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }

    // Validación especial para teléfono - solo permitir números y caracteres válidos
    if (name === 'phone') {
      const phoneRegex = /^[\d\s\-\(\)\+]*$/;
      if (!phoneRegex.test(value)) {
        return; // No actualizar si contiene caracteres inválidos
      }
    }

    // Límites de caracteres
    const maxLengths = {
      name: 100,
      email: 100,
      phone: 20,
      website: 500,
      description: 500
    };

    if (value.length > maxLengths[name]) {
      return; // No actualizar si excede el límite
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};

    // Validar nombre (obligatorio)
    if (!formData.name.trim()) {
      errors.name = 'El nombre es obligatorio';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar email (obligatorio)
    if (!formData.email.trim()) {
      errors.email = 'El correo electrónico es obligatorio';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Por favor ingresa un correo electrónico válido';
    }

    // Validar teléfono (opcional, pero si se completa debe ser válido)
    if (formData.phone && formData.phone.trim() && !validatePhone(formData.phone)) {
      errors.phone = 'Por favor ingresa un número de teléfono válido';
    }

    // Website es opcional, pero si se completa debe ser válida
    if (formData.website && formData.website.trim()) {
      try {
        new URL(formData.website);
      } catch {
        errors.website = 'Por favor ingresa una URL válida (ej: https://ejemplo.com)';
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar formulario antes de enviar
    if (!validateForm()) {
      setSubmitMessage({
        type: 'error',
        text: 'Por favor corrige los errores antes de enviar.',
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // 🔗 URL del webhook de n8n desde variable de entorno
      const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
      
      // Preparar los datos para enviar (limpiar espacios)
      const dataToSend = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim() || null,
        website: formData.website.trim() || null,
        description: formData.description.trim() || null,
        timestamp: new Date().toISOString(),
        source: 'website_chatbot_form'
      };

      console.log('Enviando datos a n8n:', dataToSend);

      // Enviar a n8n
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

      const result = await response.json();
      console.log('Respuesta de n8n:', result);

      setSubmitMessage({
        type: 'success',
        text: '¡Gracias por tu interés! Hemos recibido tu solicitud y te contactaremos pronto.',
      });

      // Limpiar formulario solo si el envío fue exitoso
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        description: '',
      });
      setFieldErrors({});

    } catch (error) {
      console.error('Error enviando formulario:', error);
      
      setSubmitMessage({
        type: 'error',
        text: 'Hubo un error al enviar el formulario. Por favor, intentá de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitMessage({ type: '', text: '' });
      }, 5000);
    }
  };

  return (
    <div className="max-w-[900px] mx-auto pt-8">
      <StyledHeading />

      <div className="max-w-[700px] mx-auto bg-[#111]/50 p-6 rounded-xl">
        {submitMessage.text && (
          <div className={`mb-6 p-4 rounded-md ${submitMessage.type === 'success' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
            {submitMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-wrap">
          {[
            { name: 'name', placeholder: 'Nombre completo *', type: 'text' },
            { name: 'email', placeholder: 'Correo electrónico *', type: 'email' },
            { name: 'phone', placeholder: 'Teléfono (opcional)', type: 'tel' },
            { name: 'website', placeholder: 'https://www.sitio.com (opcional)', type: 'url' },
          ].map(({ name, placeholder, type }) => (
            <div className="w-full md:w-1/2 p-4" key={name}>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required={name === 'name' || name === 'email'}
                placeholder={placeholder}
                className={`block w-full p-4 bg-transparent text-white border-b-2 outline-none placeholder:text-gray-500 transition-all ${
                  fieldErrors[name] 
                    ? 'border-red-500 focus:border-red-400' 
                    : 'border-[#00B7FF] focus:border-[#828282] valid:border-[#3344ff]'
                }`}
              />
              {fieldErrors[name] && (
                <p className="text-red-400 text-sm mt-2">{fieldErrors[name]}</p>
              )}
            </div>
          ))}

          {/* Descripción */}
          <div className="w-full p-4">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="¿Cómo te gustaría que te ayudemos con un chatbot? (opcional)"
              className={`block w-full p-4 bg-transparent text-white border-b-2 outline-none placeholder:text-gray-500 resize-none transition-all ${
                fieldErrors.description 
                  ? 'border-red-500 focus:border-red-400' 
                  : 'border-[#00B7FF] focus:border-[#828282]'
              }`}
            />
            {fieldErrors.description && (
              <p className="text-red-400 text-sm mt-2">{fieldErrors.description}</p>
            )}
            <p className="text-gray-500 text-xs mt-2">
              Máximo 500 caracteres ({formData.description.length}/500)
            </p>
          </div>

          {/* Botón de envío */}
          <div className="w-full p-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 text-[#00B7FF] border-2 border-[#00B7FF] hover:bg-[#3344ff] hover:text-white transition-all duration-300 active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatbotRequestForm;