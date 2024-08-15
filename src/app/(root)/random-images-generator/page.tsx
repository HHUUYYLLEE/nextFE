"use client";
import { useQuery } from "@tanstack/react-query";
import { getRandomImage } from "@/app/(api)/randomImages";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function RandomImagesGenerator() {
  const { data, refetch, isSuccess, isFetching } = useQuery({
    queryKey: ["getRandomImage"],
    queryFn: () => {
      return getRandomImage();
    },
    enabled: false,
    retry: true,
  });
  const [loadingImg, setLoadingImg] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imageRef.current) {
      if (imageRef.current.complete) setLoadingImg(false);
      else setLoadingImg(true);
    }
  }, [isFetching]);
  return (
    <main className="mx-[5rem] my-[8rem]">
      <div className="text-white flex justify-center font-lexend-400 text-[3rem]">
        Random Images Generator
      </div>
      <div className="mt-[3rem] h-[270px]">
        {isSuccess && !isFetching && (
          <div
            className={`flex justify-center ${
              loadingImg ? " absolute opacity-0 " : ""
            }`}
          >
            <Image
              onLoadingComplete={() => setLoadingImg(false)}
              ref={imageRef}
              alt=""
              src={data.data.url}
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: "auto", height: "250px" }}
              onError={() => refetch()}
            />
          </div>
        )}
        {(isFetching || loadingImg) && (
          <div className="flex justify-center">
            <div>
              <Image
                alt=""
                src="/images/random-color-pixels.gif"
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: "auto", height: "250px" }}
              />
              <div className="flex justify-center text-white italic mt-[0.7rem]">
                Loading...
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-[2rem]">
        <button
          className="text-white bg-blue-700 rounded-md px-[2rem] py-[0.5rem]
        hover:bg-green-600"
          onClick={() => refetch()}
        >
          Get random image
        </button>
      </div>
    </main>
  );
}
