import { z } from 'zod';
import {
  CPF_INPUT_LENGTH,
  ERROR_ADDRESS_INCOMPLETE,
  ERROR_PHONE_INCOMPLETE,
  ERROR_CPF_INCOMPLETE,
  ERROR_CPF_INVALID,
  ERROR_CPF_REQUIRED,
  ERROR_EMAIL_INVALID,
  ERROR_EMAIL_REQUIRED,
  ERROR_NAME_INCOMPLETE,
  ERROR_NAME_REQUIRED,
  ERROR_PHONE_REQUIRED,
  INPUT_PHONE_LENGTH,
  isCPFValid,
  MIN_LENGTH_ADDRESS,
  MIN_LENGTH_NAME,
  PHONE_LENGTH,
} from '@/src/helpers';

export const validateCreateCostumersFormSchema = z.object({
  name: z
    .string()
    .nonempty(ERROR_NAME_REQUIRED)
    .min(MIN_LENGTH_NAME, ERROR_NAME_INCOMPLETE)
    .transform((name) =>
      name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ')
    ),
  email: z.string().nonempty(ERROR_EMAIL_REQUIRED).email(ERROR_EMAIL_INVALID),
  cpf: z
    .string()
    .nonempty(ERROR_CPF_REQUIRED)
    .min(CPF_INPUT_LENGTH, ERROR_CPF_INCOMPLETE)
    .transform((cpf) => cpf?.replace(/\D/g, ''))
    .refine((cpf) => cpf && cpf.length && isCPFValid(cpf), ERROR_CPF_INVALID),
  phone: z
    .string()
    .nonempty(ERROR_PHONE_REQUIRED)
    .min(INPUT_PHONE_LENGTH, ERROR_PHONE_INCOMPLETE)
    .transform((phone) => phone?.replace(/\D/g, ''))
    .refine(
      (phone) => phone && phone.length && phone.length === PHONE_LENGTH,
      ERROR_PHONE_INCOMPLETE
    ),
  address: z
    .string()
    .min(MIN_LENGTH_ADDRESS, ERROR_ADDRESS_INCOMPLETE)
    .or(z.literal('')),
});

export type validateCreateCostumersFormType = z.infer<
  typeof validateCreateCostumersFormSchema
>;
