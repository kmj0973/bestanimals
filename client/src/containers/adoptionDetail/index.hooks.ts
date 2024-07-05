import {
  getSingleAnimalInfoData,
  getSingleAnimalPhotoData,
} from "@/service/adoption";
import { useQuery } from "@tanstack/react-query";

export const useSingleInfoData = (animalID: number) => {
  const { data = {}, isLoading } = useQuery({
    queryKey: ["InfoData", animalID],
    queryFn: () => getSingleAnimalInfoData(animalID),
  });

  return { infoData: data, isLoading2: isLoading };
};

export const useSinglePhotoData = (animalID: number) => {
  const { data = {}, isLoading } = useQuery({
    queryKey: ["PhotoData", animalID],
    queryFn: () => getSingleAnimalPhotoData(animalID),
  });

  return { photoData: data, isLoading };
};
