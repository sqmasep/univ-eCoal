import { User } from "@/db";

export interface UserUtils {
  access_token: string;
  token_type: string;
  userData: User;
  msg: string;
}
