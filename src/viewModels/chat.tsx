"use client";
import { useEffect, useRef, useState } from "react";
import { Socket } from "src/viewModels/socket";
import { MessageListData } from "src/types/types";
import { useQuery } from "@tanstack/react-query";
import { getAllMessages } from "src/api/allMessages";
export const Chat_View_Model = () => {
  const [messageList, setMessageList] = useState<MessageListData[]>([]),
    inputRef = useRef<HTMLTextAreaElement>(null),
    [openChat, setOpenChat] = useState<boolean>(false),
    { messageEvent, socket, connectedId } = Socket(),
    { isLoading, isSuccess } = useQuery({
      queryKey: ["messageList"],
      queryFn: async () => {
        const data = (await getAllMessages()).data;
        setMessageList(data.messageList);
        return data;
      },
    });
  const handleEnter = (
    clearRef: () => void,
    e: React.KeyboardEvent,
    message: string | undefined
  ) => {
    if (e.shiftKey && e.key === "Enter") {
      return true;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      clearRef();
      if (message !== "" && message !== "\n") submitMessage(message);
    }
  };
  const submitMessage = (message: string | undefined) => {
    if (!message || message === "") return;
    socket.emit("message", message);
    setMessageList((prev) => [
      ...prev,
      {
        id: connectedId,
        data: message,
        date: new Date(),
      },
    ]);
  };
  useEffect(() => {
    console.log(messageEvent);
    if (messageEvent.id !== "" && messageEvent.data !== "")
      setMessageList((prev) => [
        ...prev,
        {
          id: messageEvent.id,
          data: messageEvent.data,
          date: new Date(),
        },
      ]);
  }, [messageEvent, setMessageList]);
  useEffect(() => {
    if (messageList.length >= 40) setMessageList((prev) => prev.slice(1));
  }, [messageList.length, setMessageList]);
  return {
    openChat,
    setOpenChat,
    messageList,
    inputRef,
    submitMessage,
    handleEnter,
    isLoading,
    isSuccess,
  };
};
