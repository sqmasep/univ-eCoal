import { RegisterValues } from "@/lib/validationSchema/register";
import { axios } from "../client";

export const registerMutationFn = (values: RegisterValues) =>
  axios.post("/register", values);
