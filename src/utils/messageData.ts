import { MessageListData } from "src/types/types";

export const getUserId = () =>
  typeof window !== "undefined" && localStorage.getItem("userId");
export const clearUserId = () =>
  typeof window !== "undefined" && localStorage.removeItem("userId");
export const setUserId = (id: string) =>
  typeof window !== "undefined" && localStorage.setItem("userId", id);
export const getMessageData = () =>
  typeof window !== "undefined" && localStorage.getItem("messageData");

export const clearMessageData = () =>
  typeof window !== "undefined" && localStorage.removeItem("messageData");
export const setMessageData = (data: MessageListData[]) =>
  typeof window !== "undefined" &&
  localStorage.setItem("messageData", JSON.stringify(data));
