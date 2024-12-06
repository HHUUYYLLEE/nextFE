import Link from "next/link";
import Image from "next/image";
import Timer from "src/components/timer";
import WebName from "src/components/webName";

export default function Header() {
  return (
    <>
      <header
        className="fixed z-[20] flex justify-between top-0 w-full h-20 shadow-lg 
      items-center transition duration-450 bg-gray-800"
      >
        <Link href="/" className="focus:outline-none">
          <div className="flex items-center">
            <div className="ml-[0.7rem]">
              <Image
                src="/images/logo.png"
                width={70}
                height={70}
                alt=""
                priority
                draggable="false"
              />
            </div>
            <WebName />
          </div>
        </Link>
        <Timer />
      </header>
    </>
  );
}
