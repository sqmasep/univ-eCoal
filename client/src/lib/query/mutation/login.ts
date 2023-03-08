import { LoginValues } from "@/lib/validationSchema/login";
import { axios } from "../client";

export const loginMutationFn = (values: LoginValues) =>
  axios.post("/login", values);
