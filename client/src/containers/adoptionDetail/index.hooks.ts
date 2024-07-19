import {
  getSingleAnimalInfoData,
  getSingleAnimalPhotoData,
} from "@/service/adoption";
import { useQuery } from "@tanstack/react-query";

export const useSingleInfoData = (animalID: number) => {
  const infoQuery = useQuery({
    queryKey: ["InfoData", animalID],
    queryFn: () => getSingleAnimalInfoData(animalID),
  });

  const photoQuery = useQuery({
    queryKey: ["PhotoData", animalID],
    queryFn: () => getSingleAnimalPhotoData(animalID),
  });

  return {
    infoData: infoQuery.data,
    photoData: photoQuery.data,
    isLoading: infoQuery.isLoading || photoQuery.isLoading,
  };
};
