import { multipartFormInstance } from "src/utils/http";
import { SearchSongType } from "src/types/types";

export const shazamSearch = (data: FormData) =>
  multipartFormInstance.post<SearchSongType>("/shazam", data);
