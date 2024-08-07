import Image from "next/image";
import {
  RevealAnimationBottomToTop,
  RevealAnimationTopToBottom,
} from "../(animationTemplates)/revealAnimation";
import Link from "next/link";
const duration = 0.7;
export default function Features() {
  return (
    <div className="flex gap-x-[5rem]">
      <RevealAnimationTopToBottom duration={duration} delay={0}>
        <Link href="/qr-codes-generator">
          <div
            className="outline outline-white outline-[1px] rounded-lg 
        hover:scale-[110%] duration-300 hover:bg-[#4848483d] [&>div]:hover:underline"
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
                width={200}
                height={200}
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
        hover:scale-[110%] duration-300 hover:bg-[#4848483d] [&>div]:hover:underline"
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
                width={130}
                height={130}
                draggable="false"
              />
            </div>
          </div>
        </Link>
      </RevealAnimationBottomToTop>
      <RevealAnimationTopToBottom duration={duration} delay={duration * 2}>
        <div
          className="flex justify-center items-center outline outline-white outline-[1px] rounded-lg h-[13.5rem] 
        hover:scale-[110%] duration-300 hover:bg-[#4848483d]"
        >
          <div className=" text-white text-[4rem] my-[1rem] select-none">?</div>
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
