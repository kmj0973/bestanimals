"use client";

import { useEffect, useState } from "react";
import * as S from "./SimpleBanner.styles";

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
      <S.FirstSimpleBanner
        $scrollY={scroll}
        $standardHeight={height}
      ></S.FirstSimpleBanner>
      <S.SecondSimpleBanner
        $scrollY={scroll}
        $standardHeight={height}
      ></S.SecondSimpleBanner>
      <S.ThirdSimpleBanner
        $scrollY={scroll}
        $standardHeight={height}
      ></S.ThirdSimpleBanner>
    </S.SimpleBannerContainer>
  );
};

export default SimpleBanner;
