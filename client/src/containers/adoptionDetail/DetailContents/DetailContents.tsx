"use client";

import * as S from "./DetailContents.styles";
import { useParams } from "next/navigation";
import { useSingleInfoData, useSinglePhotoData } from "../index.hooks";
import Loading from "@/components/Loading";

const DetailContents = () => {
  const router = useParams();

  const { infoData, isLoading } = useSingleInfoData(+router.animalID);
  const { photoData } = useSinglePhotoData(+router.animalID);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <S.ContentsContainer>
      <S.InfoContainer>
        <S.PhotoNameWrapper>
          <S.PhotoBox
            key={infoData.ANIMAL_NO}
            src={`https://` + photoData.PHOTO_URL}
            alt="animal_photo_image"
          />
          <S.NameBox>
            <div>{infoData.NM}</div>
            {infoData.SEXDSTN == "M" ? (
              <S.Male size="30px" />
            ) : (
              <S.Female size="30px" />
            )}
          </S.NameBox>
        </S.PhotoNameWrapper>
        <S.InfoWrapper>
          <S.InfoBox>
            입소날짜 :
            {infoData.ENTRNC_DATE
              ? infoData.ENTRNC_DATE.split("-").join(".")
              : infoData.ENTRNC_DATE}
          </S.InfoBox>
          <S.InfoBox>품종 : {infoData.BREEDS}</S.InfoBox>
          <S.InfoBox>무게 : {infoData.BDWGH}kg</S.InfoBox>
          <S.InfoBox>나이 : {infoData.AGE}</S.InfoBox>
          <S.UnderLine></S.UnderLine>
          <S.YoutubeUrl href={infoData.INTRCN_MVP_URL}>
            {infoData.NM} 소개 영상
          </S.YoutubeUrl>
        </S.InfoWrapper>
      </S.InfoContainer>
      <S.Line></S.Line>
      <S.DetailCotainer>
        <S.DetailBox dangerouslySetInnerHTML={{ __html: infoData.INTRCN_CN }} />
        <S.GuideBox>
          <S.GuideContent>
            서울동물복지지원센터내의 입양대기동물들은 입양 전 교육 이수 후
            첫만남이 가능합니다. 나이는 추정나이로써 실제 나이와 일치하지 않을
            수 있으며, 성격 또한 입양 후 생활패턴이나 환경, 시간 등 변화에 따라
            달라질 수 있으니 충분히 고려해보신 후 입양신청 해주세요.
          </S.GuideContent>
          <S.GuideButton href="/procedure">
            입양 절차 안내 바로가기
          </S.GuideButton>
        </S.GuideBox>
      </S.DetailCotainer>
    </S.ContentsContainer>
  );
};

export default DetailContents;
