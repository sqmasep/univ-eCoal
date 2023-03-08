import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { passwordSchema } from "./common";

export const registerSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords should match",
    path: ["confirmPassword"],
  });

export const registerInitialValues: RegisterValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const registerFields: {
  label: string;
  name: keyof RegisterValues;
}[] = [
  {
    label: "Name",
    name: "name",
  },
  {
    label: "Email",
    name: "email",
  },
  {
    label: "Password",
    name: "password",
  },
  {
    label: "Confirm password",
    name: "confirmPassword",
  },
];

export const formikRegisterSchema = toFormikValidationSchema(registerSchema);
export type RegisterValues = z.infer<typeof registerSchema>;
