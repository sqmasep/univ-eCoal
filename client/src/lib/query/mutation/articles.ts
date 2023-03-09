import { axios } from "../client";

export const article = {
  create: async (data: unknown) => await axios.post("/articles"),
  update: (id: number) => async (data: unknown) =>
    await axios.put(`/articles/${id}`),
  delete: async (id: number) => await axios.delete(`/articles/${id}`),
};
