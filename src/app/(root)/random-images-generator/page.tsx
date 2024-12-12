"use client";

import Image from "next/image";
import Random_Images_Generator_ViewModel from "src/viewModels/random-images-generator";

export default function Random_Images_Generator() {
  const {
    isSuccess,
    isFetching,
    loadingImg,
    setLoadingImg,
    data,
    imageRef,
    refetch,
  } = Random_Images_Generator_ViewModel();
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
              unoptimized
              onLoad={() => setLoadingImg(false)}
              ref={imageRef}
              alt=""
              src={data?.data.url || "#"}
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
                draggable="false"
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
        hover:enabled:bg-green-600 disabled:bg-gray-800 disabled:text-gray-600"
          disabled={isFetching || loadingImg ? true : false}
          onClick={() => refetch()}
        >
          Get random image
        </button>
      </div>
    </main>
  );
}
