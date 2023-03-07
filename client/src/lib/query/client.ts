import { QueryClient } from "@tanstack/react-query";
import axiosClient from "axios";

export const queryClient = new QueryClient();
export const axios = axiosClient.create({
  baseURL: "http://localhost:8000/api",
});

const getToken = () => localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
