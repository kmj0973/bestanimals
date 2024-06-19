"use client";

import { useState } from "react";
import * as S from "./Contents.styles";
import { useInfoData, usePhotoData } from "../index.hooks";
import dynamic from "next/dynamic";
import Loading from "@/app/_common/Loading";

const Contents = () => {
  const AdoptionList = dynamic(() => import("../AdoptionList/AdoptionList"), {
    ssr: false,
    loading: () => <Loading />,
  });

  const { infoData } = useInfoData();
  const { photoData } = usePhotoData();

  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [regionCenter, setRegionCenter] = useState("");

  const handleSpeciesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecies(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const handleRgionCenterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegionCenter(e.target.value);
  };

  return (
    <S.ContentsContainer>
      <S.OptionContainer>
        <S.Species onChange={handleSpeciesChange}>
          <option value="">종</option>
          <option key="강아지" value="DOG">
            강아지
          </option>
          <option key="고양이" value="CAT">
            고양이
          </option>
        </S.Species>
        <S.Gender onChange={handleGenderChange}>
          <option value="">성별</option>
          <option key="수컷" value="M">
            수컷
          </option>
          <option key="암컷" value="W">
            암컷
          </option>
        </S.Gender>
        <S.RegionCenter onChange={handleRgionCenterChange}>
          <option value="">지역 센터</option>
          <option key="동대문센터" value="동대문센터">
            동대문센터
          </option>
          <option key="마포센터" value="마포센터">
            마포센터
          </option>
          <option key="구로센터" value="구로센터">
            구로센터
          </option>
        </S.RegionCenter>
      </S.OptionContainer>
      <AdoptionList
        resultInfoData={infoData}
        duplicatePhotoData={photoData}
        options={[species, gender, regionCenter]}
      />
    </S.ContentsContainer>
  );
};

export default Contents;
