"use client";
import Image from "next/image";

export default function ProgLangMarquee() {
  return (
    <div className=" overflow-hidden flex">
      <div className="xl:animate-marqueexl 2xl:animate-marquee2xl">
        <div className="flex gap-x-[8rem]">
          <a href="https://react.dev/">
            <Image
              alt=""
              src="/images/react.png"
              width={90}
              height={90}
              draggable="false"
            />
          </a>
          <a href="https://nextjs.org/">
            <Image
              alt=""
              src="/images/nextjs.png"
              width={90}
              height={90}
              draggable="false"
            />
          </a>
          <a href="https://expressjs.com/">
            <Image
              alt=""
              src="/images/expressjs.png"
              width={90}
              height={90}
              draggable="false"
            />
          </a>
          <a href="https://nestjs.com/">
            <Image
              alt=""
              src="/images/nestjs.png"
              width={90}
              height={90}
              draggable="false"
            />
          </a>
          <a href="https://www.mongodb.com/docs/">
            <Image
              alt=""
              src="/images/mongodb.png"
              width={90}
              height={90}
              draggable="false"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
