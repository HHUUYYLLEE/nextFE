import axios, { AxiosError } from "axios";
import HttpStatusCode from "src/constants/httpStatusCode.enum";
export function isAxiosError(error: Error | AxiosError) {
  return axios.isAxiosError(error);
}

export function isAxiosUnprocessableEntityError(error: Error | AxiosError) {
  return (
    isAxiosError(error) &&
    error.response?.status === HttpStatusCode.UnprocessableEntity
  );
}

export function getAges(dateOB: string) {
  const date = new Date(dateOB);
  const currentDate = new Date();
  const year = date.getFullYear();
  const currentYear = currentDate.getFullYear();

  return currentYear - year;
}

export function displayNum(num: string) {
  return num
    .toString()
    .replace(/\D/g, "")
    .replace(/^0+(\d)/, "$1")
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}

export function convertTime(num: string) {
  const temp = parseInt(num);
  if (temp >= 0 && temp < 10) return "0" + temp;
  return temp;
}

export function convertDate(date: string) {
  return date.substring(0, 10).replaceAll("-", "/");
}
