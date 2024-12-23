import Image from "next/image";

export const ProgLangMarquee = () => {
  return (
    <div className="overflow-hidden flex">
      <div className="xl:animate-marqueexl 2xl:animate-marquee2xl">
        <div className="flex gap-x-[8rem]">
          <a href="https://react.dev/">
            <Image
              alt=""
              src="/icons/react.png"
              width={90}
              height={90}
              draggable="false"
            />
          </a>
          <a href="https://nextjs.org/">
            <Image
              alt=""
              src="/icons/nextjs.png"
              width={90}
              height={90}
              draggable="false"
            />
          </a>
          <a href="https://expressjs.com/">
            <Image
              alt=""
              src="/icons/expressjs.png"
              width={90}
              height={90}
              draggable="false"
            />
          </a>
          <a href="https://nestjs.com/">
            <Image
              alt=""
              src="/icons/nestjs.png"
              width={90}
              height={90}
              draggable="false"
            />
          </a>
          <a href="https://www.mongodb.com/docs/">
            <Image
              alt=""
              src="/icons/mongodb.png"
              width={90}
              height={90}
              draggable="false"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
