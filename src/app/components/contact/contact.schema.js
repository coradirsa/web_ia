import { z } from "zod";

const phoneRegex = /^\+?[0-9\s-()]{7,20}$/;

// Función helper para el preprocess
const emptyStringToUndefined = (val) => (typeof val === 'string' && val.trim() === "" ? undefined : val);

export const contactSchema = z.object({
    name: z.string({ required_error: "El nombre es obligatorio." }).min(2, "El nombre debe tener al menos 2 caracteres."),
    email: z.string({ required_error: "El correo electrónico es obligatorio." }).email("Por favor ingresa un correo electrónico válido."),
    phone: z.preprocess(emptyStringToUndefined,
        z.string()
            .optional()
            .refine(value => !value || phoneRegex.test(value), { 
                message: "Por favor ingresa un número de teléfono válido.",
            })
    ),
    website: z.preprocess(emptyStringToUndefined,
        z.string()
            .url({ message: "Por favor ingresa una URL válida (ej: https://ejemplo.com)." })
            .optional()
    ),
    description: z.preprocess(emptyStringToUndefined,
        z.string()
            .max(500, "La descripción no debe exceder los 500 caracteres.")
            .optional()
    ),
});