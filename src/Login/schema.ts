import { z } from 'zod';
import {
  ERROR_EMAIL_INVALID,
  ERROR_EMAIL_REQUIRED,
  ERROR_PASSWORD_REQUIRED,
  MIN_LENGTH_PASSWORD,
} from '../helpers';

export const validateLoginFormSchema = z.object({
  email: z.string().nonempty(ERROR_EMAIL_REQUIRED).email(ERROR_EMAIL_INVALID),
  password: z.string().min(MIN_LENGTH_PASSWORD, ERROR_PASSWORD_REQUIRED),
});

export type validateLoginFormType = z.infer<typeof validateLoginFormSchema>;
