"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { segmented14 } from "src/constants/fonts";
export default function WebName() {
  const arrayState = useRef<number[]>(Array(10).fill(1));
  const [switchState, setSwitchState] = useState<number[]>(Array(10).fill(1));
  const [turnOnInterval, setTurnOnInterval] = useState<boolean>(false);
  const run = useCallback(() => {
      arrayState.current = Math.floor(Math.random() * 1024)
        .toString(2)
        .padStart(10, "0")
        .split("")
        .map(Number);
    }, []),
    cycleLight = useCallback(() => {
      let randomTime = 400 + Math.floor(Math.random() * 4) * 100;
      if (turnOnInterval)
        setTimeout(() => {
          setSwitchState(arrayState.current);
          cycleLight();
        }, randomTime);
    }, [turnOnInterval]);
  useEffect(() => {
    setTurnOnInterval(true);
    cycleLight();
    const interval = setInterval(run, 100);
    return () => {
      clearInterval(interval);
      setTurnOnInterval(false);
    };
  }, [cycleLight, run]);
  return (
    <div className="ml-[0.7rem] relative bg-black w-[16rem] h-[2.5rem] flex items-center justify-center rounded-lg select-none">
      <div
        className={
          "absolute sm:text-3xl text-xl italic text-[rgba(194,206,206,0.05)] " +
          segmented14.className
        }
      >
        ~~~~~~~~~~
      </div>
      <div className="absolute sm:text-3xl text-xl italic text-white">
        <span
          className={
            `transition duration-300 ${!!switchState[0] ? "" : "opacity-20"} ` +
            segmented14.className
          }
        >
          H
        </span>
        <span
          className={
            `transition duration-300 ${!!switchState[1] ? "" : "opacity-20"} ` +
            segmented14.className
          }
        >
          H
        </span>
        <span
          className={
            `transition duration-300 ${!!switchState[2] ? "" : "opacity-20"} ` +
            segmented14.className
          }
        >
          U
        </span>
        <span
          className={
            `transition duration-300 ${!!switchState[3] ? "" : "opacity-20"} ` +
            segmented14.className
          }
        >
          U
        </span>
        <span
          className={
            `transition duration-300 ${!!switchState[4] ? "" : "opacity-20"} ` +
            segmented14.className
          }
        >
          Y
        </span>
        <span
          className={
            `transition duration-300 ${!!switchState[5] ? "" : "opacity-20"} ` +
            segmented14.className
          }
        >
          Y
        </span>
        <span
          className={
            `transition duration-300 ${!!switchState[6] ? "" : "opacity-20"} ` +
            segmented14.className
          }
        >
          L
        </span>
        <span
          className={
            `transition duration-300 ${!!switchState[7] ? "" : "opacity-20"} ` +
            segmented14.className
          }
        >
          L
        </span>
        <span
          className={
            `transition duration-300 ${!!switchState[8] ? "" : "opacity-20"} ` +
            segmented14.className
          }
        >
          E
        </span>
        <span
          className={
            `transition duration-300 ${!!switchState[9] ? "" : "opacity-20"} ` +
            segmented14.className
          }
        >
          E
        </span>
      </div>
    </div>
  );
}
