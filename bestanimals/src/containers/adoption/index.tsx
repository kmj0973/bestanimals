"use client";

import * as S from "./index.styles";
import SmallHeader from "@/app/_common/SmallHeader";
import AdoptionList from "./AdoptionList";
import { useInfoData, usePhotoData } from "./index.hooks";
import Option from "./Option";

const Adoption = () => {
  const { infoData } = useInfoData();
  const { photoData } = usePhotoData();

  return (
    <main>
      <S.AdoptionContainer>
        <SmallHeader content={"유기동물 입양"} />
        <S.ContentsContainer>
          <Option />
          <AdoptionList
            resultInfoData={infoData}
            duplicatePhotoData={photoData}
          />
        </S.ContentsContainer>
      </S.AdoptionContainer>
    </main>
  );
};

export default Adoption;
