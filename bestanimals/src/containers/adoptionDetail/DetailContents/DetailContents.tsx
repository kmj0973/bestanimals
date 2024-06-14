import { resultProps } from "@/types/home.types";
import * as S from "./DetailContents.styles";

const DetailContents = (props: {
  infoData: resultProps;
  photoData: resultProps;
}) => {
  return (
    <S.ContentsContainer>
      <S.InfoContainer>
        <S.PhotoNameWrapper>
          <S.PhotoBox
            key={props.infoData.ANIMAL_NO}
            src={`https://` + props.photoData.PHOTO_URL}
            alt="animal_photo_image"
          />

          <S.NameBox>{props.infoData.NM}</S.NameBox>
        </S.PhotoNameWrapper>
        <S.InfoWrapper>
          <S.InfoBox>
            입소날짜 :
            {props.infoData.ENTRNC_DATE
              ? props.infoData.ENTRNC_DATE.split("-").join(".")
              : props.infoData.ENTRNC_DATE}
          </S.InfoBox>
          <S.InfoBox>품종 : {props.infoData.BREEDS}</S.InfoBox>
          <S.InfoBox>무게 : {props.infoData.BDWGH}kg</S.InfoBox>
          <S.InfoBox>나이 : {props.infoData.AGE}</S.InfoBox>
          <S.UnderLine></S.UnderLine>
        </S.InfoWrapper>
      </S.InfoContainer>
      <S.DetailCotainer>
        <S.DetailBox
          dangerouslySetInnerHTML={{ __html: props.infoData.INTRCN_CN }}
        />
      </S.DetailCotainer>
    </S.ContentsContainer>
  );
};

export default DetailContents;
