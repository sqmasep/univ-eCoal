import { format, formatDistanceToNow } from "date-fns";

export const dateFromNow = (date: Date | number | string) =>
  formatDistanceToNow(new Date(date));

export const formatDate = (date: Date | number | string) =>
  format(new Date(date), "PPP");
