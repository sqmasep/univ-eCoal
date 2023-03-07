import { Article } from "@/db";
import { QueryFields, QueryUtils } from ".";
import { axios } from "./client";

const articlesKeys = {
  all: ["articles"] as const,
  byId: (id: string) => [...articlesKeys.all, { filter: id }] as const,
  byTag: (tag: string | undefined) => [...articlesKeys.all, { tag }] as const,
};

const articleQueries = {
  all: async () => await axios.get("/articles"),
  byId: (id: string) => async () => await axios.get(`/articles/${id}`),
  byTag: (tag: string | undefined) => async () =>
    await axios.get<Article[]>(`/articles?tag=${tag}`),
} satisfies QueryFields<typeof articlesKeys>;

export const articles = {
  keys: articlesKeys,
  queries: articleQueries,
} satisfies QueryUtils;
