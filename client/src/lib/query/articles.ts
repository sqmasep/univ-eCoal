import { Article } from "@/db";
import { QueryFields, QueryUtils } from ".";
import { axios } from "./client";

const articlesKeys = {
  all: ["articles"] as const,
  byId: (id: string) => [...articlesKeys.all, { filter: id }] as const,
  byTag: (tag: string | undefined) => [...articlesKeys.all, { tag }] as const,
  bySearch: (search: string) => [...articlesKeys.all, { search }] as const,
};

const articleQueries = {
  all: async () => await axios.get<Article[]>("/articles"),
  byId: (id: string) => async () =>
    (await axios.get<Article>(`/articles/${id}`)).data,
  byTag: (tag: string | undefined) => async () =>
    await axios.get<Article[]>(`/articles?tag=${tag}`),
  bySearch: (search: string) => async () =>
    await axios.get<Article[]>(`/search/${search}`),
} satisfies QueryFields<typeof articlesKeys>;

export const articles = {
  keys: articlesKeys,
  queries: articleQueries,
} satisfies QueryUtils;
