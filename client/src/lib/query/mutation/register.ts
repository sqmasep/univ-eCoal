import { RegisterValues } from "@/lib/validationSchema/register";
import { UserUtils } from ".";
import { axios } from "../client";

export const registerMutationFn = (values: RegisterValues) =>
  axios.post<UserUtils>("/register", values);
