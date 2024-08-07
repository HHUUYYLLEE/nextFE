"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Error() {
  function backToBlank(): void {
    window.location.href = "about:blank";
  }

  useEffect(() => {
    setTimeout(backToBlank, 2000);
  }, []);

  return (
    <div className="mt-[4rem]">
      <div className="flex justify-center w-full">
        <Image
          alt=""
          src="/images/errordetectphone.png"
          width={150}
          height={150}
        />
        <Image
          alt=""
          src="/images/errordetecttablet.png"
          width={150}
          height={150}
        />
      </div>
      <div className="flex justify-center">
        <Image alt="" src="/images/pepeslap.jpg" width={200} height={200} />
      </div>
    </div>
  );
}
