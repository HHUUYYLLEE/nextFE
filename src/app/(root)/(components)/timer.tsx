"use client";
import { DateTime } from "luxon";
import { useRef, useEffect } from "react";
import localFont from "next/font/local";
const segmented7 = localFont({
  src: "../../../../public/fonts/DSEG7Classic-Bold.woff",
});
const segmented14 = localFont({
  src: "../../../../public/fonts/DSEG14Modern-Italic.woff",
});

export default function Timer() {
  const div = useRef<HTMLSpanElement>(null),
    seconds = useRef<HTMLSpanElement>(null),
    session = useRef<HTMLSpanElement>(null);
  function time(): void {
    let d: string,
      s: string,
      m: string,
      h: string,
      sesn: string,
      splitStr: string[],
      splitStr2: string[];
    d = DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS);
    splitStr = d.split(":");
    splitStr2 = splitStr[2].split(" ");
    s = splitStr2[0];
    m = splitStr[1];
    h = splitStr[0];

    sesn = splitStr2[1];
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
}
