import { axios } from "../client";

export const tag = {
  create: async (data: unknown) =>
    await axios.post("/tags", {
      data,
    }),
  update: (id: number) => async (data: unknown) =>
    await axios.put(`/tags/${id}`, {
      data,
    }),
  delete: async (id: number) => await axios.delete(`/tags/${id}`),
};
