"use client";
import { useMutation } from "@tanstack/react-query";
import { shazamSearch } from "src/api/shazamSearch";
import { shazamSearchInterface, SearchSongType } from "src/types/types";
import Modal from "react-modal";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import AudioPlayer from "react-audio-player";
export default function Music_2_ViewModel() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [shazamDisabled, setShazamDisabled] = useState<boolean>(true);
  const [enableShazamModal, setEnableShazamModal] = useState<boolean>(false);
  const [searchSongInfo, setSearchSongInfo] = useState<SearchSongType>({
    songName: "",
    singers: "",
    songAlbumArt: "",
    songPreviewUrl: "",
    songAlbum: "",
    songRelease: "",
    songShazamMusic: "",
    songYoutubeMusic: "",
  });
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
    console.log(data.upload_file);
    const formData = new FormData();
    formData.append("filename", data.upload_file.name);
    formData.append("upload_file", data.upload_file);
    searchMutation.mutate(formData, {
      onSuccess: (data: any) => {
        const songName = data.data.songName,
          singers = data.data.singers,
          songAlbumArt = data.data.songAlbumArt,
          songPreviewUrl = data.data.songPreviewUrl,
          songAlbum = data.data.songAlbum,
          songRelease = data.data.songRelease,
          songShazamMusic = data.data.songShazamMusic,
          songYoutubeMusic = data.data.songYoutubeMusic;
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
  return {
    inputRef,
    loadAudio,
    audioRef,
    shazamDisabled,
    setEnableShazamModal,
    onSubmitSearch,
    screenHeight,
    screenWidth,
    searchMutation,
    searchSongInfo,
    enableShazamModal,
  };
}
