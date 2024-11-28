import axios from "axios";

import { envConfig } from "@/utils/env";
const shazamAPI = axios.create({
  baseURL: envConfig.shazamHost,
  headers: {
    "x-rapidapi-ua": "RapidAPI-Playground",
    "x-rapidapi-key": "5af8e97c90mshf86894f23665fbbp194430jsn3c15333144b2",
    "x-rapidapi-host": envConfig.shazamHost?.replace("https://", ""),
    specificMethodHeaders: "[object Object]",
  },
});
export const shazamSearch = (data: FormData) =>
  shazamAPI.post("/shazam/recognize/", data);
