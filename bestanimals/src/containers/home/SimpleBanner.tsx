"use client";

import { useEffect, useState } from "react";
import * as S from "./SimpleBanner.styles";

const SimpleBanner = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);

    console.log("window.scrollY : ", window.scrollY);
  };
  return (
    <S.SimpleBannerContainer>
      <S.FirstSimpleBanner scrollY={scroll}></S.FirstSimpleBanner>
      <S.SecondSimpleBanner scrollY={scroll}></S.SecondSimpleBanner>
      <S.ThirdSimpleBanner scrollY={scroll}></S.ThirdSimpleBanner>
    </S.SimpleBannerContainer>
  );
};

export default SimpleBanner;
