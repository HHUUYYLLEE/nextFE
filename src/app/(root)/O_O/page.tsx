"use client";
import Image from "next/image";
import Modal from "react-modal";
import { Oval } from "react-loader-spinner";
import Link from "next/link";
import O_O_ViewModel from "src/viewModels/o_o";

export default function O_O() {
  const {
    audioRef,
    hideGif,
    setHideGif,
    setLoadedAudio,
    setPlay,
    imageURL,
    play,
    screenHeight,
    screenWidth,
    setLoadedImage,
    modal,
    loadedAudio,
    loadedImage,
    setModal,
    playAudio,
  } = O_O_ViewModel();

  return (
    <>
      <main className="mx-[5rem] my-[8rem]">
        <audio
          ref={audioRef}
          onEnded={() => setHideGif(true)}
          onCanPlayThrough={() => setLoadedAudio(true)}
          onPlay={() => setPlay(true)}
          preload="auto"
        >
          <source src="/music/phantom.ogg" type="audio/ogg" />
        </audio>
        <div className="h-[60vh]"></div>
        <Image
          alt=""
          src={imageURL}
          className={`fixed bottom-0 left-0 right-0 z-[20] ${
            play && !hideGif ? "" : " invisible "
          }`}
          width={screenWidth}
          height={screenHeight}
          onLoad={() => setLoadedImage(true)}
          quality={100}
          priority
        />
      </main>
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0,0)",
            backdropFilter: "blur(100px)",
            zIndex: 20,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            paddingLeft: "3vw",
            paddingRight: "3vw",
            paddingTop: "2vw",
            paddingBottom: "2vw",
            borderWidth: "0px",
            borderRadius: "1rem",
            backgroundColor: "#111111",
          },
        }}
        isOpen={modal}
      >
        <div className="flex items-center justify-center">
          <Image
            alt=""
            src="/images/warning.gif"
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "auto", height: "35px" }}
            draggable="false"
          />
          <div className="text-[#f8c428] italic">Warning</div>
          <Image
            alt=""
            src="/images/warning.gif"
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "auto", height: "35px" }}
            draggable="false"
          />
        </div>
        <div className="text-white mt-[1rem] flex justify-center">
          Continue with caution.
        </div>
        <div className="flex justify-center items-center mt-[1.5rem] gap-x-4">
          <Link href="/">
            <button className="text-white px-[1rem] py-[0.5rem] bg-green-900 rounded-lg hover:bg-green-600">
              Go back
            </button>
          </Link>
          {loadedAudio && loadedImage ? (
            <button
              className="text-white px-[1rem] py-[0.5rem] bg-red-900 rounded-lg hover:bg-red-600"
              onClick={() => {
                setModal(false);
                playAudio();
              }}
            >
              Continue
            </button>
          ) : (
            <Oval
              height="70"
              width="70"
              color="rgb(0,128,255)"
              secondaryColor="rgba(0,128,255,0.5)"
              ariaLabel="oval-loading"
              visible={true}
              strokeWidth={5}
              strokeWidthSecondary={5}
              wrapperStyle={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            />
          )}
        </div>
      </Modal>
    </>
  );
}
