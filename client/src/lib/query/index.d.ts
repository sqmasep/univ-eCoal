export type QueryFields<T extends object> = Record<keyof T, unknown>;

export interface QueryUtils {
  keys: T;
  queries: Record<R extends keyof T ? R : never, V>;
}
