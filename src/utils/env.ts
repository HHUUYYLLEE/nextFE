export const envConfig = {
  deployURL:
    process.env.NEXT_PUBLIC_OPTION === "1"
      ? process.env.NEXT_PUBLIC_LOCAL_URL
      : process.env.NEXT_PUBLIC_CLOUD_URL,
  googleClientID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  shazamHost: process.env.NEXT_PUBLIC_SHAZAM_API_HOST,
  shazamAPI: process.env.NEXT_PUBLIC_SHAZAM_API_KEY,
};
