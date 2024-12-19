"use client";
import {
  useEffect,
  useRef,
  useReducer,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
export default function Music_1_ViewModel() {
  const screenWidth = useRef(0);
  const screenHeight = useRef(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAudioCallback = useCallback(() => audioRef.current?.play(), []);
  useEffect(() => {
    window.addEventListener("click", playAudioCallback);
    return () => window.removeEventListener("click", playAudioCallback);
  }, [playAudioCallback]);
  useLayoutEffect(() => {
    screenWidth.current = window.innerWidth - 30;
    screenHeight.current = window.innerHeight - 200;
  }, []);
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
    screenWidth: screenWidth.current,
    screenHeight: screenHeight.current,
    setPlayMusic,
    audioRef,
    musicCount,
    playMusic,
    changeMusic,
  };
}
