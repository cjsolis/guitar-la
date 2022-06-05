import { BASE_API_URL } from "./constants";

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

export const getApiUrl = (uri: string): string => BASE_API_URL + uri;