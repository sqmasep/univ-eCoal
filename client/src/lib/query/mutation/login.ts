import { User } from "@/db";
import { LoginValues } from "@/lib/validationSchema/login";
import { UserUtils } from ".";
import { axios } from "../client";

export const loginMutationFn = async (values: LoginValues) =>
  await axios.post<UserUtils>("/login", values);
