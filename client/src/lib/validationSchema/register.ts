import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { passwordSchema } from "./common";

export const registerSchema = z
  .object({
    email: z.string().email(),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords should match",
    path: ["confirmPassword"],
  });

export const registerInitialValues: RegisterValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const formikRegisterSchema = toFormikValidationSchema(registerSchema);
export type RegisterValues = z.infer<typeof registerSchema>;
