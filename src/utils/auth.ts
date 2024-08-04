import { keyInfoInterface } from "@/types/types";
export const saveAccessTokenToLS = (access_token: string | undefined): void => {
  if (access_token !== undefined)
    localStorage.setItem("access_token", access_token);
};

export const saveInfoToLS = (info: keyInfoInterface): void => {
  const json = JSON.stringify(info);
  localStorage.setItem("keyInfo", json);
};

export const clearAccessTokenFromLS = (): void => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("keyInfo");
};

export const getAccessTokenFromLS = (): string | undefined =>
  localStorage.getItem("access_token") || undefined;

export const getInfoFromLS = (): keyInfoInterface | null => {
  const info = localStorage.getItem("keyInfo");
  if (info !== null) {
    const objectInfo: keyInfoInterface = JSON.parse(info);
    return objectInfo;
  } else {
    localStorage.removeItem("keyInfo");
    return null;
  }
};
