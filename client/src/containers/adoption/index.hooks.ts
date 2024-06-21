import { getAnimalInfoData, getAnimalPhotoData } from "@/service/adoption";
import { useQuery } from "@tanstack/react-query";

export const useInfoData = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["InfoData"],
    queryFn: getAnimalInfoData,
  });

  return { infoData: data, isLoading };
};

export const usePhotoData = () => {
  const { data = [] } = useQuery({
    queryKey: ["PhotoData"],
    queryFn: getAnimalPhotoData,
  });

  return { photoData: data };
};
