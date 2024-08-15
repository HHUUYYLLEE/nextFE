"use client";
import AudioPlayer from "react-audio-player";
import { FaFileAudio } from "react-icons/fa";
import { MdFileUpload } from "react-icons/md";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import ReactAudioSpectrum from "react-audio-spectrum";
export default function Music_2() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth - 30);
    setScreenHeight(window.innerHeight - 200);
  }, []);

  const audioRef = useRef<AudioPlayer>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  function loadAudio(event: ChangeEvent<HTMLInputElement>): void {
    if (!event.target.files) return;
    audioRef.current!.audioEl.current!.src = URL.createObjectURL(
      event.target.files[0]
    );
    audioRef.current!.audioEl.current!.onload = (): void =>
      URL.revokeObjectURL(audioRef.current!.audioEl.current!.src);
  }

  return (
    <main className="mx-[5rem] my-[8rem]">
      <input
        ref={inputRef}
        type="file"
        accept=".wav, .mp3, .ogg, .flac, .aac"
        className="hidden"
        onChange={(event) => loadAudio(event)}
      />
      <div className="flex gap-x-4">
        <AudioPlayer
          className="w-full"
          id="audio-element"
          ref={audioRef}
          controls
        />
        <button
          className="text-white rounded-lg hover:bg-[#0f8e9566] bg-[#4444444f] px-[2rem] flex justify-center py-[0.5rem]"
          onClick={() => inputRef.current?.click()}
        >
          <MdFileUpload
            style={{
              color: "ffc300",
              width: 35,
              height: 35,
            }}
          />
          <FaFileAudio
            style={{
              color: "ffc300",
              width: 30,
              height: 30,
            }}
          />
        </button>
      </div>
      {screenWidth > 0 ? (
        <div className="flex justify-center">
          <ReactAudioSpectrum
            id="audio-canvas"
            height={screenHeight}
            width={screenWidth}
            audioId={"audio-element"}
            capColor={"white"}
            capHeight={1.5}
            meterWidth={5}
            meterCount={300}
            meterColor={[
              { stop: 0.2, color: "#800000" },
              { stop: 0.7, color: "#0CD7FD" },
              { stop: 1, color: "#008800" },
            ]}
            gap={4}
          />
        </div>
      ) : (
        <div className={`h-[70vh]`}></div>
      )}
    </main>
  );
}
