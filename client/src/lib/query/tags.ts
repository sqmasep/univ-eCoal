import { Tag } from "@/db";
import { QueryFields, QueryUtils } from ".";
import { axios } from "./client";

const tagsKeys = {
  all: ["tags"] as const,
};

const tagsQueries = {
  all: async () => await axios.get<Tag[]>(`/tags`),
} satisfies QueryFields<typeof tagsKeys>;

export const tags = {
  keys: tagsKeys,
  queries: tagsQueries,
} satisfies QueryUtils;
