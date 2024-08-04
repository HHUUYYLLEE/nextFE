const envConfig = {
  deployURL:
    process.env.OPTION === "1" ? process.env.LOCAL_URL : process.env.CLOUD_URL,
  googleClientID: process.env.GOOGLE_CLIENT_ID,
};

export { envConfig };
