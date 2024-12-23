"use client";
import Modal from "react-modal";
import { useCallback, useEffect, useRef, useState } from "react";
export const O_O_ViewModel = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [loadedImage, setLoadedImage] = useState<boolean>(false),
    [loadedAudio, setLoadedAudio] = useState<boolean>(false),
    [play, setPlay] = useState<boolean>(false),
    [hideGif, setHideGif] = useState<boolean>(false),
    [modal, setModal] = useState<boolean>(true),
    [imageURL, setImageURL] = useState<string>("/images/phantom.gif");

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    Modal.setAppElement("body");
    audioRef.current?.load();
    setImageURL("/images/phantom.gif");
  }, []);

  const audioRef = useRef<HTMLAudioElement>(null);
  const playAudioCallback = useCallback(() => {
    if (audioRef.current) audioRef.current.play();
  }, []);

  return {
    audioRef,
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
    hideGif,
    playAudioCallback,
  };
};
