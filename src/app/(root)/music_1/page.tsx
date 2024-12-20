"use client";
import Image from "next/image";
import ReactAudioSpectrum from "react-audio-spectrum";
import { playlist } from "src/constants/music";
import Music_1_ViewModel from "src/viewModels/music_1";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

export default function Music_1() {
  const {
    playlistCount,
    screenWidth,
    screenHeight,
    setPlayMusic,
    audioRef,
    musicCount,
    setPlaylistAndPlay,
    playMusic,
    setMusicAndPlay,
  } = Music_1_ViewModel();
  return (
    <div className="mx-[5rem] my-[8rem]">
      <audio
        id="audio-element"
        ref={audioRef}
        autoPlay
        onPlaying={() => setPlayMusic(true)}
        onEnded={() => setMusicAndPlay()}
      >
        <source src={"/music/" + playlist[playlistCount][musicCount]} />
      </audio>
      {!playMusic && (
        <Image
          alt=""
          src="/icons/playbutton.gif"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "150px" }}
          draggable="false"
          onClick={() => setPlayMusic(true)}
          className="absolute left-0 right-0 m-auto top-[50%] cursor-pointer hover:bg-[#212133] rounded-full hover:scale-[115%]"
        />
      )}
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
      <button
        className="bg-emerald-600 hover:bg-green-800 px-4 py-2 right-5 top-[21vh] rounded-lg z-20
      flex items-center gap-x-2 text-white fixed"
        onClick={() => setPlaylistAndPlay()}
      >
        <TbPlayerTrackNextFilled />
        <div>Change playlist</div>
      </button>
    </div>
  );
}
