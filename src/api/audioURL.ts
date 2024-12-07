import { applicationJSONInstance } from "src/utils/http";
import { audioURLInterface } from "src/types/types";
export const getAudioBuffer = (data: FormData) =>
  applicationJSONInstance.post<audioURLInterface>("/audio", data);
