import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { passwordSchema } from "./common";

export const loginSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

export const loginInitialValues: LoginValues = {
  email: "",
  password: "",
};

export const formikLoginSchema = toFormikValidationSchema(loginSchema);
export type LoginValues = z.infer<typeof loginSchema>;
