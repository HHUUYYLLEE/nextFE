import { applicationJSONInstance } from "@/utils/http";
import { randomImageInterface } from "@/types/types";
export const getRandomImage = () =>
  applicationJSONInstance.get<randomImageInterface>("/image");
