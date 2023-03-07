import { axios } from "./client";

export const articlesKeys = {
  all: ["articles"] as const,
  byId: (id: string) => [...articlesKeys.all, { filter: id }] as const,
};

export const articleQueries = {
  all: axios.get("/posts"),
  byId: (id: string) => axios.get(`/posts/${id}`),
};
