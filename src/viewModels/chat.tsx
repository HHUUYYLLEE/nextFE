"use client";
import { useEffect, useState } from "react";
import { broadCastMessages } from "src/constants/broadcastMessages";
import { toast } from "react-toastify";
import { Socket } from "src/viewModels/socket";
import { MessageListData } from "src/types/types";
export const Broadcast = () => {
  const [messageList, setMessageList] = useState<MessageListData[]>([]),
    { messageEvent } = Socket();
  useEffect(() => {
    console.log(messageEvent);
    // if (broadcastEvent !== 0)
    //   toast.success(broadCastMessages.get(broadcastEvent));
  }, [messageEvent]);
  return null;
};
