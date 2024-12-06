"use client";
import { useEffect, useRef, useReducer, useState } from "react";
export default function Music_1_ViewModel() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth - 30);
    setScreenHeight(window.innerHeight - 200);
    window.addEventListener("click", playAudio);
    return () => window.removeEventListener("click", playAudio);
  }, []);

  const [playMusic, setPlayMusic] = useState<boolean>(false);
  function setMusic(musicCount: number): number {
    if (musicCount === 9) return 0;
    else return ++musicCount;
  }
  const [musicCount, changeMusic] = useReducer(setMusic, 0);

  const audioRef = useRef<HTMLAudioElement>(null);
  function playAudio(): void {
    if (audioRef.current) audioRef.current.play();
  }

  useEffect(() => {
    if (audioRef.current) audioRef.current.load();
  }, [musicCount]);
  return {
    screenWidth,
    screenHeight,
    setPlayMusic,
    audioRef,
    musicCount,
    playMusic,
    changeMusic,
  };
}
