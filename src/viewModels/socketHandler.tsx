"use client";
import { envConfig } from "src/utils/env";
import useWebSocket from "react-use-websocket";
import { useCallback, useEffect } from "react";
import { broadCastMessages } from "src/constants/broadcastMessages";
import { WsSocketMessage } from "src/types/wsSocket";
import { toast } from "react-toastify/unstyled";
export default function SocketHandler() {
  const { lastJsonMessage, sendJsonMessage } = useWebSocket(
    `${envConfig.deployURL}`,
    {
      onOpen: () => {
        console.log("connected");
      },
    }
  );
  //   const tempSocket = useCallback(() => {
  //     sendJsonMessage({
  //       event: "message",
  //       data: "send socket",
  //     });
  //   }, [sendJsonMessage]);
  useEffect(() => {
    console.log(lastJsonMessage);
    if ((lastJsonMessage as WsSocketMessage)?.event === "broadcast-message")
      switch ((lastJsonMessage as WsSocketMessage).data) {
        case 1:
          toast.success("A new client entered website.");
          break;
        case 2:
          toast.success("A client left website.");
          break;
        default:
          break;
      }
  }, [lastJsonMessage]);
  return null;
}
