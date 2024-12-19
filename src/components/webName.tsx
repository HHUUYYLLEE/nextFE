"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { segmented14 } from "src/constants/fonts";
export default function WebName() {
  const arrayState = useRef<number[]>(Array(10).fill(1));
  const [switchState, setSwitchState] = useState<number[]>(Array(10).fill(1));
  const [turnOnInterval, setTurnOnInterval] = useState<boolean>(false);
  const cycleLight = useCallback(() => {
    let randomTime = 700 + Math.floor(Math.random() * 4) * 100;
    if (turnOnInterval)
      setTimeout(() => {
        setSwitchState(
          Math.floor(Math.random() * 1024)
            .toString(2)
            .padStart(10, "0")
            .split("")
            .map(Number)
        );
        cycleLight();
      }, randomTime);
  }, [turnOnInterval]);
  useEffect(() => {
    setTurnOnInterval(true);
    cycleLight();
    return () => {
      setTurnOnInterval(false);
    };
  }, [cycleLight]);
  return (
    <div className="ml-[0.7rem] relative bg-black w-[16rem] h-[2.5rem] flex items-center justify-center rounded-lg select-none">
      <div
        className={
          "absolute sm:text-3xl text-xl italic text-[#0a0a0a] " +
          segmented14.className
        }
      >
        ~~~~~~~~~~
      </div>
      <div className="absolute sm:text-3xl text-xl italic ">
        <span
          className={
            `transition duration-300 ${
              !!switchState[0] ? "text-white" : "text-[#333333]"
            } ` + segmented14.className
          }
        >
          H
        </span>
        <span
          className={
            `transition duration-300 ${
              !!switchState[1] ? "text-white" : "text-[#333333]"
            } ` + segmented14.className
          }
        >
          H
        </span>
        <span
          className={
            `transition duration-300 ${
              !!switchState[2] ? "text-white" : "text-[#333333]"
            } ` + segmented14.className
          }
        >
          U
        </span>
        <span
          className={
            `transition duration-300 ${
              !!switchState[3] ? "text-white" : "text-[#333333]"
            } ` + segmented14.className
          }
        >
          U
        </span>
        <span
          className={
            `transition duration-300 ${
              !!switchState[4] ? "text-white" : "text-[#333333]"
            } ` + segmented14.className
          }
        >
          Y
        </span>
        <span
          className={
            `transition duration-300 ${
              !!switchState[5] ? "text-white" : "text-[#333333]"
            } ` + segmented14.className
          }
        >
          Y
        </span>
        <span
          className={
            `transition duration-300 ${
              !!switchState[6] ? "text-white" : "text-[#333333]"
            } ` + segmented14.className
          }
        >
          L
        </span>
        <span
          className={
            `transition duration-300 ${
              !!switchState[7] ? "text-white" : "text-[#333333]"
            } ` + segmented14.className
          }
        >
          L
        </span>
        <span
          className={
            `transition duration-300 ${
              !!switchState[8] ? "text-white" : "text-[#333333]"
            } ` + segmented14.className
          }
        >
          E
        </span>
        <span
          className={
            `transition duration-300 ${
              !!switchState[9] ? "text-white" : "text-[#333333]"
            } ` + segmented14.className
          }
        >
          E
        </span>
      </div>
    </div>
  );
}
