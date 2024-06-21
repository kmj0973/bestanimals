"use client";

import { useEffect, useState } from "react";
import * as S from "./SimpleBanner.styles";
import Link from "next/link";

const SimpleBanner = () => {
  const [scroll, setScroll] = useState(0);
  const [height, setStandardHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleRsize);
    setStandardHeight(window.innerHeight);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleRsize = () => {
    setStandardHeight(window.innerHeight);
  };
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <S.SimpleBannerContainer>
      <S.FirstSimpleBanner $scrollY={scroll} $standardHeight={height}>
        <S.TextWrapper>
          <S.MainText>
            우리가 반려 동물과<br></br>교감하기 전<br></br>지켜주어야 할 것들
          </S.MainText>
          <S.SubText>
            <Link href="/procedure">입양 절차 바로가기</Link>
          </S.SubText>
        </S.TextWrapper>
      </S.FirstSimpleBanner>
      <S.SecondSimpleBanner $scrollY={scroll} $standardHeight={height}>
        <S.TextWrapper>
          <S.MainText>
            서로가<br></br>서로에게 힘이<br></br> 되어주는 순간
          </S.MainText>
          <S.SubText>
            <Link href="/adoption">
              유기 동물 입양<br></br>바로가기
            </Link>
          </S.SubText>
        </S.TextWrapper>
      </S.SecondSimpleBanner>
      <S.ThirdSimpleBanner $scrollY={scroll} $standardHeight={height}>
        <S.TextWrapper>
          <S.MainText>
            밝고<br></br>행복한 모습을<br></br>보여주세요!
          </S.MainText>
          <S.SubText>
            <Link href="https://cafe.naver.com/seoulanimalcare">
              입양 후기 바로가기
            </Link>
          </S.SubText>
        </S.TextWrapper>
      </S.ThirdSimpleBanner>
    </S.SimpleBannerContainer>
  );
};

export default SimpleBanner;
