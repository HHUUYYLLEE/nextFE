import { keyInfoInterface } from "src/types/types";
export const saveAccessTokenToLS = (access_token: string | undefined): void => {
  if (access_token !== undefined && typeof window !== "undefined")
    localStorage.setItem("access_token", access_token);
};

export const saveInfoToLS = (info: keyInfoInterface): void => {
  if (typeof window !== "undefined") {
    const json = JSON.stringify(info);
    localStorage.setItem("keyInfo", json);
  }
};

export const clearAccessTokenFromLS = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("access_token");
    localStorage.removeItem("keyInfo");
  }
};

export const getAccessTokenFromLS = (): string | undefined => {
  if (typeof window !== "undefined")
    return localStorage.getItem("access_token") || undefined;
  else return undefined;
};

export const getInfoFromLS = (): keyInfoInterface | null => {
  if (typeof window !== "undefined") {
    const info = localStorage.getItem("keyInfo");
    if (info !== null) {
      const objectInfo: keyInfoInterface = JSON.parse(info);
      return objectInfo;
    } else {
      localStorage.removeItem("keyInfo");
      return null;
    }
  }
  return null;
};
