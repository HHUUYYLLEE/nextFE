import Image from "next/image";
import Info from "./components/info";
import QRCodes from "./components/qrcodes";
export default function Home() {
  return (
    <main className="mx-[5rem] my-[6rem]">
      <div className="flex gap-x-[10rem]">
        <div className="flex gap-x-5">
          <div className="">
            <Image src="/images/me.jpg" width={200} height={200} alt=""></Image>
          </div>
          <Info />
        </div>
        <QRCodes />
      </div>
      <div>sdasd</div>
    </main>
  );
}
