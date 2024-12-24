"use client";
import { envConfig } from "src/utils/env";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { MessageListData } from "src/types/types";
const socket = io(envConfig.deployURL);
export const Socket = () => {
  const [broadcastEvent, setBroadcastEvent] = useState<number>(0),
    [messageEvent, setMessageEvent] = useState<MessageListData>({
      id: "",
      data: "",
      date: new Date(),
    }),
    [connectedId, setConnectedId] = useState<string>("");

  useEffect(() => {
    function onBroadcastEvent(data: number) {
      setBroadcastEvent(data);
    }
    function onMessageEvent(data: MessageListData) {
      setMessageEvent(data);
    }
    socket.on("broadcast", onBroadcastEvent);
    socket.on("message", onMessageEvent);

    return () => {
      socket.close();
    };
  }, []);
  return {
    broadcastEvent,
    messageEvent,
    connectedId,
    socket,
  };
};
