"use client";
import { envConfig } from "src/utils/env";
import io from "socket.io-client";
import { useEffect, useState } from "react";
export const socket = io(envConfig.deployURL);
export const Socket = () => {
  const [broadcastEvent, setBroadcastEvent] = useState<number>(0),
    [messageEvent, setMessageEvent] = useState<number | string>("");
  useEffect(() => {
    function onBroadcastEvent(data: number) {
      setBroadcastEvent(data);
    }
    function onMessageEvent(data: number | string) {
      setMessageEvent(data);
    }
    socket.on("broadcast", onBroadcastEvent);
    socket.on("message", onMessageEvent);
    return () => {
      socket.off("broadcast", onBroadcastEvent);
      socket.off("message", onMessageEvent);
    };
  }, []);
  return { broadcastEvent, messageEvent };
};
