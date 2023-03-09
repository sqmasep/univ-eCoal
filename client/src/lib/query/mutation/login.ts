import { User } from "@/db";
import { LoginValues } from "@/lib/validationSchema/login";
import { UserUtils } from ".";
import { axios } from "../client";

export const loginMutationFn = (values: LoginValues) =>
  axios.post<UserUtils>("/login", values);
