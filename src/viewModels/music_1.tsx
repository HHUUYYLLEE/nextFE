"use client";
import { useEffect, useRef, useReducer, useState, useCallback } from "react";
export default function Music_1_ViewModel() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAudioCallback = useCallback(() => {
    if (audioRef.current) audioRef.current.play();
  }, []);
  useEffect(() => {
    setScreenWidth(window.innerWidth - 30);
    setScreenHeight(window.innerHeight - 200);
    window.addEventListener("click", playAudioCallback);
    return () => window.removeEventListener("click", playAudioCallback);
  }, [playAudioCallback]);

  const [playMusic, setPlayMusic] = useState<boolean>(false);
  const setMusicCallback = useCallback((musicCount: number) => {
    if (musicCount === 9) return 0;
    else return ++musicCount;
  }, []);

  const [musicCount, changeMusic] = useReducer(setMusicCallback, 0);
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
