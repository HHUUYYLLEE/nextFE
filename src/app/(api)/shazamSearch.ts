import axios from "axios";

import { envConfig } from "@/utils/env";
const shazamAPI = axios.create({
  baseURL: envConfig.shazamHost,
  headers: {
    "x-rapidapi-ua": "RapidAPI-Playground",
    "x-rapidapi-key": envConfig.shazamAPI,
    "x-rapidapi-host": envConfig.shazamHost?.replace("https://", ""),
    specificMethodHeaders: "[object Object]",
  },
});
export const shazamSearch = (data: FormData) =>
  shazamAPI.post("/shazam/recognize/", data);
