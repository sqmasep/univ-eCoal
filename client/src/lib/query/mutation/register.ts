import { RegisterValues } from "@/lib/validationSchema/register";
import { UserUtils } from ".";
import { axios } from "../client";

export const registerMutationFn = async (values: RegisterValues) =>
  await axios.post<UserUtils>("/register", values);
