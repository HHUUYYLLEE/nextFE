"use client";
import { ToastContainer } from "react-toastify";
const contextClass = {
  success: "toast",
  error: "toast",
  info: "toast",
  warning: "toast",
  default: "toast",
  dark: "toast",
};

export const Toast = () => {
  return (
    <>
      <ToastContainer
        toastClassName={(context) => {
          return (
            contextClass[context?.type || "default"] +
            `  pl-3 pr-1 py-1 min-h-[10vh] min-w-[20vw]
          rounded-md text-sm flex items-center text-white
           cursor-pointer overflow-x-hidden mb-2`
          );
        }}
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
      />
    </>
  );
};
