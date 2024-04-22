import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./AdoptList.styles";
import SlickButtonFix from "./SlickButtonFix";

type resultProps = {
  ANIMAL_NO: number; // 동물 번호
  NM: string; // 이름
  ENTRNC_DATE: string; // 입소 날짜
  SPCS: string; // 종
  BREEDS: string; // 품종
  SEXDSTN: string; // 성별
  AGE: string; // 나이
  BDWGH: string; //체중
  ADP_STTUS: string; //입양상태
  TMPR_PRTC_STTUS: string; // 임시보호상태
  INTRNC_MVP_URL: string; // 소개 동영상 URL
  INTRCN_CN: string; // 소개내용
  TMPR_PRTC_CN: string; //임시 보호 내용
  PHOTO_URL: string;
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: (
    <SlickButtonFix>
      <S.CustomSliderPrevArrow size="3rem" />
    </SlickButtonFix>
  ),
  nextArrow: (
    <SlickButtonFix>
      <S.CustomSliderNextArrow size="3rem" />
    </SlickButtonFix>
  ),
};

const AdoptList = async () => {
  const infoData = await fetch(
    "http://openapi.seoul.go.kr:8088/797845717872687236334e636f594d/json/TbAdpWaitAnimalView/1/20/",
    {
      headers: {
        Accept: "application / json",
      },
      method: "GET",
      next: { revalidate: 50 },
    }
  ).then((res) => res.json());

  const photoData = await fetch(
    "http://openapi.seoul.go.kr:8088/764d76474f7268723131366c4f63756e/json/TbAdpWaitAnimalPhotoView/1/300/",
    {
      headers: {
        Accept: "application / json",
      },
      method: "GET",
      next: { revalidate: 50 },
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
    <S.AdoptListContainer>
      <S.CustomSlider {...sliderSettings}>
        {resultInfoData.map((info: resultProps, i: number) => {
          return (
            <S.AdoptListWrapper key={i}>
              <S.AdoptLi color={info.SEXDSTN == "M" ? "#55bffb" : "#ffa9a9"}>
                {duplicatePhotoData.map((photo: resultProps) => {
                  if (photo.ANIMAL_NO == info.ANIMAL_NO)
                    return (
                      <S.AdoptLiPhoto
                        src={`https://` + photo.PHOTO_URL}
                        alt="animal_photo_image"
                      />
                    );
                })}
                <S.AdoptLiInfo>
                  {info.SEXDSTN == "M" ? (
                    <S.Male size="40px" />
                  ) : (
                    <S.Female size="40px" />
                  )}
                  <S.AnimalName>{info.BREEDS}</S.AnimalName>
                </S.AdoptLiInfo>
              </S.AdoptLi>
            </S.AdoptListWrapper>
          );
        })}
      </S.CustomSlider>
    </S.AdoptListContainer>
  );
};

export default AdoptList;
