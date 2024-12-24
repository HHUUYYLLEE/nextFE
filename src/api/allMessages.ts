import { applicationJSONInstance } from "src/utils/http";
import { MessageListDataInterface } from "src/types/types";
export const getAllMessages = () =>
  applicationJSONInstance.get<MessageListDataInterface>("/message");
