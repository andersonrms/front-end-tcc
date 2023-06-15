import { z } from "zod";

export const validateLoginFormSchema = z.object({
    email: z.string().nonempty('E-mail obrigatório').email('E-mail inválido'),
    password: z.string().min(8, 'Digite uma senha')
});

export type validateLoginFormType = z.infer<typeof validateLoginFormSchema>