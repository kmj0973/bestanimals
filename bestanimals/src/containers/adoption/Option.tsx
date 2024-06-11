"use client";

import { useCallback, useState } from "react";
import * as S from "./Option.styles";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const Option = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [regionCenter, setRegionCenter] = useState("");

  const createQueryString = useCallback(
    (species: string, gender: string, regionCenter: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("species", species);
      params.set("gender", gender);
      params.set("regionCenter", regionCenter);
      return params.toString();
    },
    [searchParams]
  );

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
    <S.OptionContainer>
      <S.Species onChange={handleSpeciesChange}>
        <option value="">종</option>
        <option key="강아지" value="강아지">
          강아지
        </option>
        <option key="고양이" value="고양이">
          고양이
        </option>
      </S.Species>
      <S.Gender onChange={handleGenderChange}>
        <option value="">성별</option>
        <option key="수컷" value="수컷">
          수컷
        </option>
        <option key="암컷" value="암컷">
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
      <S.SearchButton>
        <Link
          href={
            pathname + "?" + createQueryString(species, gender, regionCenter)
          }
        >
          검색
        </Link>
      </S.SearchButton>
    </S.OptionContainer>
  );
};

export default Option;
