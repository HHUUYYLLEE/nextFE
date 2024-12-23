"use client";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import "react-chat-elements/dist/main.css";
export const Chat = () => {
  return (
    <button
      className="fixed bottom-[10vh] left-2 rounded-full text-center
     bg-emerald-600 hover:bg-green-800 text-white px-2 py-2"
    >
      <IoChatbubbleEllipsesOutline
        style={{ color: "white", width: 35, height: 35 }}
      />
    </button>
  );
};
