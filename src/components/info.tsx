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
          src="/icons/phonering.gif"
          width={35}
          height={35}
          draggable="false"
        />
        <div className="pointer-events-none text-white">0833471885</div>
      </div>

      <a
        href="https://www.facebook.com/huy.leba.75"
        className="flex items-center gap-x-2 hover:underline text-white w-max
            hover:outline-1 hover:outline-white hover:outline rounded-lg"
      >
        <Image
          alt=""
          src="/icons/facebookgif.gif"
          width={35}
          height={35}
          draggable="false"
        />
        <div>https://www.facebook.com/huy.leba.75</div>
      </a>

      <div
        className="flex items-center gap-x-2 w-full
          hover:outline-1 hover:outline-white hover:outline rounded-lg"
      >
        <Image
          alt=""
          src="/icons/newemail.gif"
          width={35}
          height={35}
          draggable="false"
        />
        <div className="text-white pointer-events-none">
          lebahuybk@gmail.com
        </div>
      </div>

      <a
        href="https://github.com/HHUUYYLLEE"
        className="flex items-center gap-x-2 hover:underline text-white w-full
              hover:outline-1 hover:outline-white hover:outline rounded-lg"
      >
        <Image
          alt=""
          src="/icons/github.png"
          width={35}
          height={35}
          draggable="false"
        />
        <div>https://github.com/HHUUYYLLEE</div>
      </a>
    </div>
  );
}
