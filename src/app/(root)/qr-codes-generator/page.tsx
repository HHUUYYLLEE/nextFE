"use client";
import { useState } from "react";
import { QRCode } from "react-qrcode-logo";

export default function QRCodesGenerator() {
  const [value, setValue] = useState<string>("");
  return (
    <main className="mx-[5rem] my-[8rem]">
      <div className="text-white flex justify-center font-lexend-400 text-[3rem]">
        QR Codes Generator
      </div>
      <div className="flex justify-center mt-[1rem] w-full">
        <input
          type="text"
          placeholder="Text to QR..."
          className="rounded-lg focus:outline-none border-none px-[0.6rem] py-[0.2rem] placeholder:text-[#ffffff67] text-white
          bg-gray-800 w-full mx-[23rem] placeholder:text-center text-center"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div className="mt-[3rem] flex justify-center">
        <div className="bg-white w-min">
          <QRCode value={value} size={350} ecLevel="Q" />
        </div>
      </div>
    </main>
  );
}
