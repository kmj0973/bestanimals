"use client";

import * as S from "./index.styles";
import SmallHeader from "@/app/_common/SmallHeader";
import AdoptionList from "./AdoptionList";
import { useInfoData, usePhotoData } from "./index.hooks";

const Adoption = () => {
  const { infoData } = useInfoData();
  const { photoData } = usePhotoData();

  return (
    <main>
      <S.AdoptionContainer>
        <SmallHeader content={"유기동물 입양"} />
        <S.ContentsContainer>
          <S.OptionContainer>
            <S.Species>
              <option value="">종</option>
              <option key="강아지" value="강아지">
                강아지
              </option>
              <option key="고양이" value="고양이">
                고양이
              </option>
            </S.Species>
            <S.Gender>
              <option value="">성별</option>
              <option key="수컷" value="수컷">
                수컷
              </option>
              <option key="암컷" value="암컷">
                암컷
              </option>
            </S.Gender>
            <S.RegionCenter>
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
            <S.SearchButton>검색</S.SearchButton>
          </S.OptionContainer>
          <S.AdoptionListContainer>
            <AdoptionList
              resultInfoData={infoData}
              duplicatePhotoData={photoData}
            />
          </S.AdoptionListContainer>
        </S.ContentsContainer>
      </S.AdoptionContainer>
    </main>
  );
};

export default Adoption;
