"use client";

import AdoptionDetail from "@/containers/adoptionDetail";
import {
  getSingleAnimalInfoData,
  getSingleAnimalPhotoData,
} from "@/service/adoption";
import { resultProps } from "@/types/home.types";
import { useEffect, useState } from "react";

const AdoptionDetailPage = ({ params }: { params: { animalID: number } }) => {
  const [info, setInfo] = useState<resultProps>({} as resultProps);
  const [photo, setPhoto] = useState<resultProps>({} as resultProps);

  useEffect(() => {
    getSingleAnimalInfoData(params.animalID).then((res) => setInfo(res));
    getSingleAnimalPhotoData(params.animalID).then((res) => setPhoto(res));
  }, []);

  return (
    <>
      <AdoptionDetail infoData={info} photoData={photo} />
    </>
  );
};

export default AdoptionDetailPage;
