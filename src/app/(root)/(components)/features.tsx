import Image from "next/image";
import localFont from "next/font/local";
import {
  RevealAnimationBottomToTop,
  RevealAnimationTopToBottom,
} from "../(animationTemplates)/revealAnimation";
import Link from "next/link";
const chopinScriptFont = localFont({
  src: "../../../../public/fonts/ChopinScript.ttf",
});

const duration = 0.7;
export default function Features() {
  return (
    <div className="flex gap-x-[5rem]">
      <RevealAnimationTopToBottom duration={duration} delay={0}>
        <Link href="/qr-codes-generator">
          <div
            className="outline outline-white outline-[1px] rounded-lg 
        hover:scale-[110%] duration-300 hover:bg-[#4848483d] first:[&>div]:hover:underline"
          >
            <div
              className="flex justify-center text-white text-[1rem] italic py-[1rem] select-none"
              draggable="false"
            >
              QR codes generator
            </div>
            <hr className="border-t-[1px] border-white w-full" />
            <div className="flex justify-center py-[1rem]">
              <Image
                alt=""
                src="/images/qrcodesgenerator.jpg"
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: "auto", height: "150px" }}
                draggable="false"
              />
            </div>
          </div>
        </Link>
      </RevealAnimationTopToBottom>
      <RevealAnimationBottomToTop duration={duration} delay={duration}>
        <Link href="/random-images-generator">
          <div
            className="outline outline-white outline-[1px] rounded-lg 
        hover:scale-[110%] duration-300 hover:bg-[#4848483d] first:[&>div]:hover:underline"
          >
            <div
              className="flex justify-center text-white text-[1rem] italic py-[1rem] select-none"
              draggable="false"
            >
              Random images generator
            </div>
            <hr className="border-t-[1px] border-white w-full" />
            <div className="flex justify-center items-center py-[1rem]">
              <Image
                alt=""
                src="/images/random-color-pixels.gif"
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: "auto", height: "150px" }}
                draggable="false"
              />
            </div>
          </div>
        </Link>
      </RevealAnimationBottomToTop>
      <RevealAnimationTopToBottom duration={duration} delay={duration * 2}>
        <div
          className="outline outline-white outline-[1px] rounded-lg 
        hover:scale-[110%] duration-300 hover:bg-[#4848483d] first:[&>div]:hover:underline"
        >
          <div
            className="flex justify-center text-white text-[1rem] italic py-[1rem] select-none"
            draggable="false"
          >
            Music
          </div>
          <hr className="border-t-[1px] border-white w-full" />
          <div className="flex justify-center items-center py-[1rem]">
            <Image
              alt=""
              src="/images/musical-notes.gif"
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: "auto", height: "100px" }}
              draggable="false"
            />
          </div>
          <hr className="border-t-[1px] border-white w-full" />
          <div className="flex justify-between">
            <Link
              href="/music_1"
              className="border-r-2 flex justify-center w-full hover:bg-[#585757]"
            >
              <div
                className={
                  " text-white text-[2rem] select-none " +
                  chopinScriptFont.className
                }
                draggable="false"
              >
                1
              </div>
            </Link>
            <Link
              href="/music_2"
              className="border-r-2 flex justify-center w-full hover:bg-[#585757]"
            >
              <div
                className={
                  " text-white text-[2rem] select-none " +
                  chopinScriptFont.className
                }
                draggable="false"
              >
                2
              </div>
            </Link>
            {/* <Link
              href="/music_3"
              className="flex justify-center w-full hover:bg-[#585757]"
            >
              <div
                className={
                  " text-white text-[2rem] select-none " +
                  chopinScriptFont.className
                }
                draggable="false"
              >
                3
              </div>
            </Link> */}
          </div>
        </div>
      </RevealAnimationTopToBottom>
      <RevealAnimationBottomToTop duration={duration} delay={duration * 3}>
        <div
          className="flex justify-center items-center outline outline-white outline-[1px] rounded-lg h-[13.5rem]
        hover:scale-[110%] duration-300 hover:bg-[#4848483d]"
        >
          <div className=" text-white text-[4rem] my-[1rem] select-none">?</div>
        </div>
      </RevealAnimationBottomToTop>
    </div>
  );
}
