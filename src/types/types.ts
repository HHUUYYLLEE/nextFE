export interface keyInfoInterface {
  _id: string;
  username: string;
  avatar_url: string;
  refresh_token: string;
  role: number;
}
export interface randomImageInterface {
  message: string;
  url: string;
}
export interface shazamSearchInterface {
  upload_file: File;
}
export interface SearchSongType {
  songName: string;
  singers: string;
  songAlbumArt: string;
  songPreviewUrl: string;
  songAlbum: string;
  songRelease: string;
  songShazamMusic: string;
  songYoutubeMusic: string;
}
