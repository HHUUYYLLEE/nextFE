"use client";
import Modal from "react-modal";
import { useCallback, useEffect, useRef, useState } from "react";
export default function O_O_ViewModel() {
  const [loadedImage, setLoadedImage] = useState<boolean>(false),
    [loadedAudio, setLoadedAudio] = useState<boolean>(false),
    [play, setPlay] = useState<boolean>(false),
    [hideGif, setHideGif] = useState<boolean>(false),
    [modal, setModal] = useState<boolean>(true),
    [imageURL, setImageURL] = useState<string>("/images/phantom.gif"),
    screenWidth = useRef(0),
    screenHeight = useRef(0);

  useEffect(() => {
    screenWidth.current = window.innerWidth;
    screenHeight.current = window.innerHeight;
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
}
