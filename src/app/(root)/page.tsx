import Image from "next/image";
import { Info } from "src/components/info";
import { QRCodes } from "src/components/qrCodes";
import { ProgLangMarquee } from "src/components/progLangMarquee";
import { GithubStats } from "src/components/githubStats";
import { Features } from "src/components/features";

export default function Home() {
  return (
    <div className="mx-[5rem] my-[8rem]">
      <div className="flex gap-x-[10rem]">
        <div className="flex gap-x-5">
          <div className="">
            <Image
              src="/images/me.jpg"
              width={200}
              height={200}
              alt=""
              draggable="false"
            ></Image>
          </div>
          <Info />
        </div>
        <QRCodes />
      </div>
      <div className="2xl:mt-[6rem] xl:mt-[3rem]">
        <ProgLangMarquee />
      </div>
      <div className="mt-[6rem]">
        <GithubStats />
      </div>
      <div className="mt-[6rem]">
        <Features />
      </div>
    </div>
  );
}
