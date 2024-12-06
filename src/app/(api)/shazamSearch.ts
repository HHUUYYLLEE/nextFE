import { multipartFormInstance } from "@/utils/http";
import { SearchSongType } from "@/types/types";

export const shazamSearch = (data: FormData) =>
  multipartFormInstance.post<SearchSongType>("/shazam", data);
