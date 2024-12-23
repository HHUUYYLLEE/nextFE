"use client";
import { ToastContainer } from "react-toastify";
import { contextClass } from "src/constants/toastify";
export default function Toast() {
  return (
    <>
      <ToastContainer
        toastClassName={(context) =>
          `${
            contextClass[context?.type || "default"]
          } pl-3 pr-1 py-1 min-h-[10vh] rounded-md text-sm flex items-center text-white justify-between
           cursor-pointer mb-2 overflow-x-hidden`
        }
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
      />
    </>
  );
}
