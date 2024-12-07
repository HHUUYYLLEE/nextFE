"use client";
import Modal from "react-modal";
import AudioPlayer from "react-audio-player";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { SearchSongType } from "src/types/types";

export default function ShazamResultsModal({
  setEnableShazamModal,
  isPending,
  isSuccess,
  isError,
  searchSongInfo,
}: {
  setEnableShazamModal: Dispatch<SetStateAction<boolean>>;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  searchSongInfo: SearchSongType;
}) {
  return (
    <>
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 27,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            backgroundColor: "rgba(0, 0, 0, 0)",
            transform: "translate(-50%, -50%)",
            paddingLeft: "3vw",
            paddingRight: "3vw",
            paddingTop: "2vw",
            paddingBottom: "4vw",
            borderWidth: "0px",
            borderRadius: "1rem",
          },
        }}
        isOpen={true}
        onRequestClose={() => {
          !isPending && setEnableShazamModal(false);
        }}
      >
        <div
          className={`bg-[#0d3850] ${
            isPending ? "w-[60vh] h-[60vh]" : ""
          } px-[3.5vw] py-[6vh] flex justify-center items-center rounded-xl`}
        >
          {isPending && (
            <Image
              src="/images/shazam.gif"
              fill
              alt=""
              draggable="false"
              unoptimized
              priority
            />
          )}
          {!isPending &&
            (isSuccess ? (
              <div>
                <div className="font-rye-600-italic text-[#ffc300] text-4xl flex justify-center">
                  Found a song!
                </div>
                <div className="flex mt-[2vh] gap-x-[1vw]">
                  <Image
                    src={searchSongInfo.songAlbumArt}
                    width={400}
                    height={400}
                    alt=""
                    draggable="false"
                    className="w-[12vw]"
                  />
                  <div className="text-white gap-y-[2vh] flex flex-col justify-between">
                    <div className="flex flex-col gap-y-[1vh]">
                      <div>
                        <span>Tên bài hát: </span>
                        <span className="font-merienda-500-italic">
                          {searchSongInfo.songName}
                        </span>
                      </div>
                      <div>
                        <span>Biểu diễn: </span>
                        <span className="font-merienda-500-italic">
                          {searchSongInfo.singers}
                        </span>
                      </div>
                      <div>
                        <span>Album: </span>
                        <span className="font-merienda-500-italic">
                          {searchSongInfo.songAlbum}
                        </span>
                      </div>
                      <div>
                        <span>Ra mắt: </span>
                        <span className="font-merienda-500-italic">
                          {searchSongInfo.songRelease}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-[1vh]">
                      <div>Một đoạn trong bài:</div>
                      <AudioPlayer
                        className="w-full"
                        id="audio-element"
                        controls
                        src={searchSongInfo.songPreviewUrl}
                      />
                    </div>
                  </div>
                </div>
                {(searchSongInfo.songShazamMusic !== "#" ||
                  searchSongInfo.songYoutubeMusic !== "#") && (
                  <div className="mt-[5vh] text-4xl flex justify-center font-itim-regular text-white">
                    Nghe bài hát tại:
                  </div>
                )}
                <div className="flex gap-x-[3.5vw] justify-center mt-[3vh]">
                  {searchSongInfo.songShazamMusic !== "#" && (
                    <a
                      className="hover:bg-[#ffffff65] rounded-lg p-[1vh] cursor-pointer"
                      href={searchSongInfo.songShazamMusic}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/icons/shazam_icon.png"
                        width={2048}
                        height={2048}
                        alt=""
                        draggable="false"
                        className="w-[8vw]"
                      />
                    </a>
                  )}
                  {searchSongInfo.songYoutubeMusic !== "#" && (
                    <a
                      className="hover:bg-[#ffffff65] rounded-lg p-[1vh] cursor-pointer"
                      href={searchSongInfo.songYoutubeMusic}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/icons/youtubemusic-icon.png"
                        width={2048}
                        height={2048}
                        alt=""
                        draggable="false"
                        className="w-[8vw]"
                      />
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-white text-5xl">Error</div>
            ))}
        </div>
      </Modal>
    </>
  );
}
