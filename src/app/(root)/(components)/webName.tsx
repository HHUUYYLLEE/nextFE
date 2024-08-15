"use client";
import localFont from "next/font/local";
import { useEffect, useState } from "react";

const segmented14Font = localFont({
  src: "../../../../public/fonts/DSEG14Modern-Italic.woff",
});
export default function WebName() {
  const [switchState, setSwitchState] = useState<boolean[]>(
    Array(10).fill(true)
  );
  function run(): void {
    let arr = [];
    const randomNum = Math.floor(Math.random() * 1024);
    const binaryVal = randomNum.toString(2);
    const binaryStr = binaryVal.padStart(10, "0");
    for (let i = 0; i < 10; ++i) {
      if (binaryStr[i] === "0") arr.push(false);
      else arr.push(true);
    }
    setSwitchState(arr);
  }
  useEffect(() => {
    const interval = setInterval(run, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="ml-[0.7rem] relative bg-black w-[16rem] h-[2.5rem] flex items-center justify-center rounded-lg select-none">
      <div
        className={
          "absolute sm:text-3xl text-xl italic text-[rgba(194,206,206,0.05)] " +
          segmented14Font.className
        }
      >
        ~~~~~~~~~~
      </div>
      <div className="absolute sm:text-3xl text-xl italic text-white">
        <span
          className={
            `transition duration-300 ${switchState[0] ? "" : "opacity-20"} ` +
            segmented14Font.className
          }
        >
          H
        </span>
        <span
          className={
            `transition duration-300 ${switchState[1] ? "" : "opacity-20"} ` +
            segmented14Font.className
          }
        >
          H
        </span>
        <span
          className={
            `transition duration-300 ${switchState[2] ? "" : "opacity-20"} ` +
            segmented14Font.className
          }
        >
          U
        </span>
        <span
          className={
            `transition duration-300 ${switchState[3] ? "" : "opacity-20"} ` +
            segmented14Font.className
          }
        >
          U
        </span>
        <span
          className={
            `transition duration-300 ${switchState[4] ? "" : "opacity-20"} ` +
            segmented14Font.className
          }
        >
          Y
        </span>
        <span
          className={
            `transition duration-300 ${switchState[5] ? "" : "opacity-20"} ` +
            segmented14Font.className
          }
        >
          Y
        </span>
        <span
          className={
            `transition duration-300 ${switchState[6] ? "" : "opacity-20"} ` +
            segmented14Font.className
          }
        >
          L
        </span>
        <span
          className={
            `transition duration-300 ${switchState[7] ? "" : "opacity-20"} ` +
            segmented14Font.className
          }
        >
          L
        </span>
        <span
          className={
            `transition duration-300 ${switchState[8] ? "" : "opacity-20"} ` +
            segmented14Font.className
          }
        >
          E
        </span>
        <span
          className={
            `transition duration-300 ${switchState[9] ? "" : "opacity-20"} ` +
            segmented14Font.className
          }
        >
          E
        </span>
      </div>
    </div>
  );
}
