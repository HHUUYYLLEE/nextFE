import Image from "next/image";
export const QRCodes = () => {
  return (
    <div className="grid gap-y-4">
      <div className="flex gap-x-8">
        <Image
          alt=""
          src="/images/qr-momo.png"
          width={150}
          height={150}
          draggable="false"
        />
        <Image
          alt=""
          src="/images/qr-zalo.png"
          width={150}
          height={150}
          draggable="false"
        />
      </div>
      <div className="flex justify-center">
        <Image
          alt=""
          src="/icons/phonemoney.png"
          width={90}
          height={90}
          draggable="false"
        />
      </div>
    </div>
  );
};
