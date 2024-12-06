import { applicationJSONInstance } from "src/utils/http";
import { randomImageInterface } from "src/types/types";
export const getRandomImage = () =>
  applicationJSONInstance.get<randomImageInterface>("/image");
