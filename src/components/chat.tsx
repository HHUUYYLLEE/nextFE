"use client";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import "react-chat-elements/dist/main.css";
import { Chat_View_Model } from "src/viewModels/chat";
import { Socket } from "src/viewModels/socket";
import { Button, Input, MessageList } from "react-chat-elements";
import React from "react";
import { IoSend } from "react-icons/io5";
import { Oval } from "react-loader-spinner";
let clearRef = () => {};
export const Chat = () => {
  const {
      openChat,
      setOpenChat,
      messageList,
      inputRef,
      submitMessage,
      handleEnter,
      isLoading,
      isSuccess,
      setNewMessageNotif,
      newMessageNotif,
    } = Chat_View_Model(),
    { connectedId } = Socket();
  return (
    <div className="fixed bottom-[10vh] left-2">
      <div className="relative">
        <button
          className="relative rounded-full text-center
     bg-emerald-600 hover:bg-green-800 text-white px-2 py-2"
          onClick={() => {
            setNewMessageNotif(false);
            setOpenChat((prev) => !prev);
          }}
        >
          <IoChatbubbleEllipsesOutline
            style={{ color: "white", width: 35, height: 35 }}
          />
          {newMessageNotif && !openChat && (
            <div className="absolute top-0 right-0 w-[1vw] h-[1vw] bg-[#ff0000] rounded-full"></div>
          )}
        </button>

        {openChat && (
          <>
            <div className="absolute bottom-0 left-16 w-[31vw] h-[70vh] rounded-lg bg-slate-800 flex flex-col justify-between overflow-hidden">
              {isSuccess && (
                <>
                  <div className="pt-2 w-[31vw] overflow-y-auto">
                    <MessageList
                      referance={React.createRef()}
                      lockable={true}
                      toBottomHeight="100%"
                      dataSource={messageList.map((message) => {
                        return {
                          className:
                            "!overflow-x-visible text-indigo-800 whitespace-pre-wrap",
                          id: message.id,
                          position:
                            message.id === connectedId ? "right" : "left",
                          type: "text",
                          title: message.id === connectedId ? "You" : "Others",
                          text: message.data as string,
                          focus: false,
                          date: 1,
                          dateString: new Date(message.date).toLocaleTimeString(
                            navigator.language,
                            { hour: "2-digit", minute: "2-digit" }
                          ),
                          titleColor: "#1e293b",
                          forwarded: false,
                          replyButton: false,
                          removeButton: false,
                          status: "read",
                          notch: false,
                          retracted: false,
                        };
                      })}
                    />
                  </div>

                  <div className="mt-4 w-[31vw] min-h-[8vh] max-h-[8vh] pt-1 pb-1 bg-white text-emerald flex items-center">
                    <Input
                      placeholder="Chat something..."
                      multiline={true}
                      minHeight={
                        typeof window !== "undefined"
                          ? window.innerHeight * 0.07
                          : 1000
                      }
                      maxHeight={
                        typeof window !== "undefined"
                          ? window.innerHeight * 0.07
                          : 1000
                      }
                      className="flex items-center"
                      inputStyle={{
                        overflowY: "scroll",
                        scrollbarWidth: "none",
                        display: "flex",
                        alignItems: "center",
                      }}
                      referance={inputRef}
                      clear={(clear: () => void) => {
                        clearRef = clear;
                      }}
                      rightButtons={
                        <Button
                          backgroundColor="white"
                          color="#10B981"
                          icon={{
                            component: (
                              <IoSend style={{ width: 20, height: 20 }} />
                            ),
                          }}
                          onClick={() => submitMessage(inputRef.current?.value)}
                        />
                      }
                      onKeyDown={(e: React.KeyboardEvent) =>
                        handleEnter(clearRef, e, inputRef.current?.value)
                      }
                    />
                  </div>
                </>
              )}
              {isLoading && (
                <div className="flex justify-center items-center">
                  <Oval
                    height="80"
                    width="80"
                    color="#ffc300"
                    secondaryColor="#ffc300"
                    ariaLabel="oval-loading"
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
