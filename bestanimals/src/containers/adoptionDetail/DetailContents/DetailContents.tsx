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
      <S.Line></S.Line>
      <S.DetailCotainer>
        <S.DetailBox
          dangerouslySetInnerHTML={{ __html: props.infoData.INTRCN_CN }}
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
