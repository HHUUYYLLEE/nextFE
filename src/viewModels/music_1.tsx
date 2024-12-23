"use client";
import { useEffect, useRef, useReducer, useState, useCallback } from "react";
const setMusic = (musicCount: number) => {
  if (musicCount === 9) return 0;
  else return ++musicCount;
};
const setPlaylist = (playlistCount: number) => {
  if (playlistCount === 1) return 0;
  else return ++playlistCount;
};

export const Music_1_ViewModel = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const playAudioCallback = useCallback(() => audioRef.current?.play(), []);
  useEffect(() => {
    setScreenWidth(window.innerWidth - 30);
    setScreenHeight(window.innerHeight - 200);
    window.addEventListener("click", playAudioCallback);
    return () => window.removeEventListener("click", playAudioCallback);
  }, [playAudioCallback]);

  const [playMusic, setPlayMusic] = useState<boolean>(false);
  const [playlistCount, changePlaylist] = useReducer(setPlaylist, 0);
  const [musicCount, changeMusic] = useReducer(setMusic, 0);
  const setMusicAndPlay = () => {
    changeMusic();
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };
  const setPlaylistAndPlay = () => {
    changePlaylist();
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };
  return {
    playlistCount,
    setMusicAndPlay,
    screenWidth,
    screenHeight,
    setPlayMusic,
    audioRef,
    musicCount,
    playMusic,
    setPlaylistAndPlay,
  };
};
