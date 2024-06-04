import { resultProps } from "@/types/home.types";
import * as S from "./index.styles";
import SmallHeader from "@/app/_common/SmallHeader";
import AdoptionList from "./AdoptionList";

const Adoption = async () => {
  const infoData = await fetch(
    "http://openapi.seoul.go.kr:8088/797845717872687236334e636f594d/json/TbAdpWaitAnimalView/1/25/",
    {
      headers: {
        Accept: "application / json",
      },
      method: "GET",
      next: { revalidate: 50 },
    }
  ).then((res) => res.json());

  const photoData = await fetch(
    "http://openapi.seoul.go.kr:8088/764d76474f7268723131366c4f63756e/json/TbAdpWaitAnimalPhotoView/1/500/",
    {
      headers: {
        Accept: "application / json",
      },
      method: "GET",
      cache: "no-store",
    }
  ).then((res) => res.json());

  const resultInfoData = infoData.TbAdpWaitAnimalView.row;

  const resultPhotoData = photoData.TbAdpWaitAnimalPhotoView.row;

  const duplicatePhotoData = resultPhotoData.reduce(
    (prev: Array<resultProps>, now: resultProps) => {
      //중복제거 함수
      if (!prev.some((obj) => obj.ANIMAL_NO === now.ANIMAL_NO)) {
        prev.push(now);
      }
      return prev;
    },
    []
  );

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
              resultInfoData={resultInfoData}
              duplicatePhotoData={duplicatePhotoData}
            />
          </S.AdoptionListContainer>
        </S.ContentsContainer>
      </S.AdoptionContainer>
    </main>
  );
};

export default Adoption;
