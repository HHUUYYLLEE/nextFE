import Image from "next/image";

export default function Info() {
  return (
    <div className="flex flex-wrap content-between w-min">
      <div
        className="flex items-center gap-x-2 w-full
          hover:outline-1 hover:outline-white hover:outline rounded-lg"
      >
        <Image
          alt=""
          src="/images/phonering.gif"
          width={35}
          height={35}
        ></Image>
        <div className="pointer-events-none text-white">0833471885</div>
      </div>

      <a
        href="https://www.facebook.com/huy.leba.75"
        className="flex items-center gap-x-2 hover:underline text-white w-max
            hover:outline-1 hover:outline-white hover:outline rounded-lg"
      >
        <Image
          alt=""
          src="/images/facebookgif.gif"
          width={35}
          height={35}
        ></Image>
        <div>https://www.facebook.com/huy.leba.75</div>
      </a>

      <div
        className="flex items-center gap-x-2 w-full
          hover:outline-1 hover:outline-white hover:outline rounded-lg"
      >
        <Image alt="" src="/images/newemail.gif" width={35} height={35}></Image>
        <div className="text-white">lebahuybk@gmail.com</div>
      </div>

      <a
        href="https://github.com/HHUUYYLLEE"
        className="flex items-center gap-x-2 hover:underline text-white w-full
              hover:outline-1 hover:outline-white hover:outline rounded-lg"
      >
        <Image alt="" src="/images/github.png" width={35} height={35}></Image>
        <div>https://github.com/HHUUYYLLEE</div>
      </a>
    </div>
  );
}
