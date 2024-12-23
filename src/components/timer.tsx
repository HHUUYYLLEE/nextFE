"use client";
import { DateTime } from "luxon";
import { useRef, useEffect } from "react";
import { segmented7, segmented14 } from "src/constants/fonts";
export const Timer = () => {
  const div = useRef<HTMLSpanElement>(null),
    seconds = useRef<HTMLSpanElement>(null),
    session = useRef<HTMLSpanElement>(null);
  function time(): void {
    const d: string = DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS),
      splitStr: string[] = d.split(":"),
      splitStr2: string[] = splitStr[2].split(" "),
      s: string = splitStr2[0],
      m: string = splitStr[1],
      sesn: string = splitStr2[1];
    let h: string = splitStr[0];

    if (parseInt(h) < 10) h = "0" + h;

    // var mnth = d.getMonth() + 1
    // var date = d.getDate()
    // var year = d.getFullYear()
    // var daylist = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    // // var fa_day = d.getDay()
    // // fa_day = daylist[fa_day]

    // if (date < 10) {
    //   date = '0' + date
    // }
    // if (mnth < 10) {
    //   mnth = '0' + 0
    // }
    if (div.current) div.current.innerHTML = h + ":" + m;
    // day.current.innerHTML = fa_day
    if (seconds.current) seconds.current.innerHTML = "\u00a0" + s;
    if (session.current) session.current.innerHTML = sesn;
    // dat.current.innerHTML = date + '-' + mnth + '-' + year
  }
  useEffect(() => {
    const interval = setInterval(time, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="cursor-default select-none ">
        <div className="bg-black h-[4.2rem] w-[17rem] rounded-[10px] border-[5px] relative border-solid border-[#FFC300]">
          <div
            className={
              "text-[2.5rem] italic absolute left-2 " + segmented7.className
            }
          >
            <div className="text-[rgba(194,206,206,0.12)] ">
              <span className={"text-[1.5vw] italic " + segmented14.className}>
                ~~
              </span>
              88:88
              <span className="text-[2vw]">&nbsp;88</span>
            </div>
            <div className="absolute top-0 text-[#FFC300] ">
              <span
                ref={session}
                className={"text-[1.5vw] italic " + segmented14.className}
              ></span>
              <span ref={div}></span>
              <span ref={seconds} className="text-[2vw] text-[#FFC300]"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
