import { formatDistanceToNow } from "date-fns";

export const dateFromNow = (date: Date | number | string) =>
  formatDistanceToNow(new Date(date));
