import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRandomImage } from "src/api/randomImages";
export default function Random_Images_Generator_ViewModel() {
  const { data, refetch, isSuccess, isFetching } = useQuery({
    queryKey: ["getRandomImage"],
    queryFn: () => {
      return getRandomImage();
    },
    enabled: false,
    retry: true,
  });
  const [loadingImg, setLoadingImg] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imageRef.current) {
      if (imageRef.current.complete) setLoadingImg(false);
      else setLoadingImg(true);
    }
  }, [isFetching]);
  return {
    isSuccess,
    isFetching,
    loadingImg,
    setLoadingImg,
    data,
    imageRef,
    refetch,
  };
}
