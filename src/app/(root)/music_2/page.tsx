"use client";
import AudioPlayer from "react-audio-player";
import { FaFileAudio } from "react-icons/fa";
import { SiShazam } from "react-icons/si";
import { MdFileUpload } from "react-icons/md";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import ReactAudioSpectrum from "react-audio-spectrum";
import { useMutation } from "@tanstack/react-query";
import { shazamSearch } from "@/app/(api)/shazamSearch";
import { shazamSearchInterface, SearchSongType } from "@/types/types";
import ShazamResultsModal from "../(components)/shazamResultsModal";
import Modal from "react-modal";
export default function Music_2() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [shazamDisabled, setShazamDisabled] = useState<boolean>(true);
  const [enableShazamModal, setEnableShazamModal] = useState<boolean>(false);
  const [searchSongInfo, setSearchSongInfo] = useState<SearchSongType>({});
  useEffect(() => {
    window.scrollTo(0, 0);
    setScreenWidth(window.innerWidth - 30);
    setScreenHeight(window.innerHeight - 200);
    Modal.setAppElement("body");
  }, []);

  const audioRef = useRef<AudioPlayer>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  function loadAudio(event: ChangeEvent<HTMLInputElement>): void {
    if (!event.target.files) return;
    setShazamDisabled(false);
    URL.revokeObjectURL(audioRef.current!.audioEl.current!.src);
    audioRef.current!.audioEl.current!.src = URL.createObjectURL(
      event.target.files[0]
    );
  }
  const searchMutation = useMutation({
    mutationFn: (body: FormData) => shazamSearch(body),
  });
  function onSubmitSearch(data: shazamSearchInterface) {
    const formData = new FormData();
    formData.append("upload_file", data.upload_file);
    searchMutation.mutate(formData, {
      onSuccess: (data) => {
        console.log(data);
        const songName = data.data.track.title || "???",
          singers = data.data.track.subtitle || "???",
          songAlbumArt = data.data.track.images.coverart || "#",
          songPreviewUrl =
            typeof data.data.track.hub.actions !== "undefined"
              ? data.data.track.hub.actions[1].uri
              : "#",
          songAlbum =
            data.data.track.sections
              .find((element: any) => element.type === "SONG")
              ?.metadata.find((element: any) => element.title === "Album")
              ?.text || "???",
          songRelease =
            data.data.track.sections
              .find((element: any) => element.type === "SONG")
              ?.metadata.find((element: any) => element.title === "Released")
              ?.text || "???",
          songShazamMusic = data.data.track.url || "#",
          songYoutubeMusic =
            typeof data.data.track.hub.providers !== "undefined"
              ? data.data.track.hub.providers.find(
                  (element: any) => element.type === "YOUTUBEMUSIC"
                )?.actions[0].uri
              : "#";
        setSearchSongInfo({
          songName,
          singers,
          songAlbumArt,
          songPreviewUrl,
          songAlbum,
          songRelease,
          songShazamMusic,
          songYoutubeMusic,
        });
      },
      onError: (error) => console.log(error),
    });
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
            onSubmitSearch({ upload_file: inputRef.current!.files![0] });
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
        <div className={`h-[70vh]`}></div>
      )}
      {enableShazamModal && (
        <ShazamResultsModal
          setEnableShazamModal={setEnableShazamModal}
          isPending={searchMutation.isPending}
          isSuccess={searchMutation.isSuccess}
          isError={searchMutation.isError}
          searchSongInfo={searchSongInfo}
        />
      )}
    </main>
  );
}
