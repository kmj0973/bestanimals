"use client";

import * as S from "./DetailContents.styles";
import { useParams } from "next/navigation";
import { useSingleInfoData, useSinglePhotoData } from "../index.hooks";

const DetailContents = () => {
  const router = useParams();

  const info = useSingleInfoData(+router.animalID);
  const photo = useSinglePhotoData(+router.animalID);

  return (
    <S.ContentsContainer>
      <S.InfoContainer>
        <S.PhotoNameWrapper>
          <S.PhotoBox
            key={info.infoData.ANIMAL_NO}
            src={`https://` + photo.photoData.PHOTO_URL}
            alt="animal_photo_image"
          />
          <S.NameBox>
            <div>{info.infoData.NM}</div>
            {info.infoData.SEXDSTN == "M" ? (
              <S.Male size="30px" />
            ) : (
              <S.Female size="30px" />
            )}
          </S.NameBox>
        </S.PhotoNameWrapper>
        <S.InfoWrapper>
          <S.InfoBox>
            입소날짜 :
            {info.infoData.ENTRNC_DATE
              ? info.infoData.ENTRNC_DATE.split("-").join(".")
              : info.infoData.ENTRNC_DATE}
          </S.InfoBox>
          <S.InfoBox>품종 : {info.infoData.BREEDS}</S.InfoBox>
          <S.InfoBox>무게 : {info.infoData.BDWGH}kg</S.InfoBox>
          <S.InfoBox>나이 : {info.infoData.AGE}</S.InfoBox>
          <S.UnderLine></S.UnderLine>
          <S.YoutubeUrl href={info.infoData.INTRCN_MVP_URL}>
            {info.infoData.NM} 소개 영상
          </S.YoutubeUrl>
        </S.InfoWrapper>
      </S.InfoContainer>
      <S.Line></S.Line>
      <S.DetailCotainer>
        <S.DetailBox
          dangerouslySetInnerHTML={{ __html: info.infoData.INTRCN_CN }}
        />
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
