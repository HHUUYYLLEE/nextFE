"use client";
import { useEffect } from "react";
import { broadCastMessages } from "src/constants/broadcastMessages";
import { toast } from "react-toastify";
import { Socket } from "src/viewModels/socket";
export const Broadcast = () => {
  const { broadcastEvent } = Socket();
  useEffect(() => {
    // console.log(broadcastEvent);
    if (broadcastEvent !== 0)
      toast.success(broadCastMessages.get(broadcastEvent));
  }, [broadcastEvent]);
  return null;
};
