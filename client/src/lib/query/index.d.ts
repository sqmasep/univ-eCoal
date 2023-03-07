// export type QueryUtils = Record<"keys" | "queries", Record<string, unknown>>;
export type QueryFields<T extends object> = Record<keyof T, unknown>;

// export type QueryUtils<T extends object, R extends keyof T> = {
//   keys: T;
//   queries: Record<R, unknown>;
// };

export interface QueryUtils {
  keys: T;
  queries: Record<R extends keyof T ? R : never, V>;
}
