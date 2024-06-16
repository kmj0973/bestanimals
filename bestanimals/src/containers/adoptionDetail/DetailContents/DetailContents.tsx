import { resultProps } from "@/types/home.types";
import * as S from "./DetailContents.styles";

const DetailContents = (props: {
  infoData: resultProps;
  photoData: resultProps;
}) => {
  console.log(props.infoData.INTRCN_MVP_URL);
  return (
    <S.ContentsContainer>
      <S.InfoContainer>
        <S.PhotoNameWrapper>
          <S.PhotoBox
            key={props.infoData.ANIMAL_NO}
            src={`https://` + props.photoData.PHOTO_URL}
            alt="animal_photo_image"
          />
          <S.NameBox>
            <div>{props.infoData.NM}</div>
            {props.infoData.SEXDSTN == "M" ? (
              <S.Male size="30px" />
            ) : (
              <S.Female size="30px" />
            )}
          </S.NameBox>
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
          <S.YoutubeUrl href={props.infoData.INTRCN_MVP_URL}>
            {props.infoData.NM} 소개 영상
          </S.YoutubeUrl>
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
