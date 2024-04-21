"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./AdoptList.styles";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <S.CustomSliderPrevArrow />,
  nextArrow: <S.CustomSliderNextArrow />,
};

const AdoptList = () => {
  const datas = fetch(
    "http://openapi.seoul.go.kr:8088/797845717872687236334e636f594d/json/TbAdpWaitAnimalView/1/5/",
    {
      headers: {
        Accept: "application / json",
      },
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => data.TbAdpWaitAnimalView.row);

  return (
    <S.AdoptListContainer>
      <S.CustomSlider {...sliderSettings}>
        <S.AdoptListWrapper>
          <S.AdoptLi></S.AdoptLi>
        </S.AdoptListWrapper>
        <S.AdoptListWrapper>
          <S.AdoptLi></S.AdoptLi>
        </S.AdoptListWrapper>
        <S.AdoptListWrapper>
          <S.AdoptLi></S.AdoptLi>
        </S.AdoptListWrapper>
        <S.AdoptListWrapper>
          <S.AdoptLi></S.AdoptLi>
        </S.AdoptListWrapper>
        <S.AdoptListWrapper>
          <S.AdoptLi></S.AdoptLi>
        </S.AdoptListWrapper>
        <S.AdoptListWrapper>
          <S.AdoptLi></S.AdoptLi>
        </S.AdoptListWrapper>
      </S.CustomSlider>
    </S.AdoptListContainer>
  );
};

export default AdoptList;
