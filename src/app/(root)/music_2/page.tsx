"use client";
import AudioPlayer from "react-audio-player";
import { FaFileAudio } from "react-icons/fa";
import { SiShazam } from "react-icons/si";
import { MdFileUpload } from "react-icons/md";
import ReactAudioSpectrum from "react-audio-spectrum";
import { ShazamResultsModal } from "src/components/shazamResultsModal";
import { Music_2_ViewModel } from "src/viewModels/music_2";
import { Loading } from "src/components/loading";
export default function Music_2() {
  const {
    inputRef,
    audioFile,
    loadAudioCallback,
    loadAudioFromUrlCallback,
    inputURLRef,
    audioRef,
    audioURLMutation,
    shazamDisabled,
    setEnableShazamModal,
    onSubmitSearchCallback,
    screenHeight,
    screenWidth,
    searchMutation,
    searchSongInfo,
    enableShazamModal,
  } = Music_2_ViewModel();
  return (
    <div className="mx-[5rem] my-[8rem]">
      <input
        ref={inputRef}
        type="file"
        accept=".wav, .mp3, .ogg, .flac, .aac"
        className="hidden"
        onChange={(event) => loadAudioCallback(event)}
      />
      <div className="flex gap-x-4">
        <input
          ref={inputURLRef}
          type="text"
          placeholder="URL of song file, or upload a file below..."
          className="rounded-lg focus:outline-none border-none px-[0.6rem] py-[0.8rem] placeholder:text-[#ffffff67] text-white
          bg-gray-800 w-full placeholder:text-center text-center"
        />
        <button
          className="text-white rounded-lg hover:bg-[#0f8e9566] bg-[#4444444f] px-[2rem] text-center py-[0.5rem]"
          onClick={() => loadAudioFromUrlCallback(inputURLRef.current!.value)}
          title="Load song from url"
        >
          <MdFileUpload
            style={{
              color: "ffc300",
              width: 35,
              height: 35,
              rotate: "235deg",
            }}
          />
        </button>
      </div>
      <div className="flex gap-x-4 mt-2 items-center">
        <AudioPlayer
          crossOrigin="anonymous"
          className="w-full h-[2rem]"
          id="audio-element"
          ref={audioRef}
          controls
        />
        <button
          className="text-white rounded-lg hover:bg-[#0f8e9566] bg-[#4444444f] px-[2rem] flex justify-center py-[0.5rem]"
          onClick={() => inputRef.current!.click()}
          title="Upload a song"
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
        <button
          className={`rounded-lg ${
            shazamDisabled ? "bg-[#ffffff90]" : "hover:bg-[#ffffffdc] bg-white"
          }  px-[2rem] flex justify-center py-[0.5rem]`}
          onClick={() => {
            setEnableShazamModal(true);
            onSubmitSearchCallback({ upload_file: audioFile });
          }}
          title="Shazam search"
          disabled={shazamDisabled ? true : false}
        >
          <SiShazam
            style={{
              opacity: shazamDisabled ? 0.5 : 1,
              color: "0088ff",
              width: 35,
              height: 35,
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
        <div className="h-[70vh]"></div>
      )}

      <ShazamResultsModal
        enableShazamModal={enableShazamModal}
        setEnableShazamModal={setEnableShazamModal}
        isPending={searchMutation.isPending}
        isSuccess={searchMutation.isSuccess}
        isError={searchMutation.isError}
        searchSongInfo={searchSongInfo}
      />

      {audioURLMutation.isPending && <Loading />}
    </div>
  );
}
