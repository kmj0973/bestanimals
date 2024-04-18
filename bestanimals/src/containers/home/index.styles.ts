"use client";

import Image from "next/image";
import styled from "styled-components";

export const MainBannerCotainer = styled.article`
  width: 100%;
  height: 380px;
  max-width: 1440px;
  margin: 10px auto 30px auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

export const MainBlurImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(20px);
`;

export const MainBannerImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SimpleBannerContainer = styled.article`
  position: relative;
  width: 100%;
  height: 1500px;
  max-width: 1440px;
  background-color: greenyellow;
  margin: 0 auto;
`;

export const FirstSimpleBanner = styled.div`
  position: absolute;
  left: 7%;
  top: 3%;
  width: 700px;
  height: 500px;
  background-color: wheat;
  z-index: 3;
`;

export const SecondSimpleBanner = styled.div`
  position: absolute;
  right: 7%;
  top: 500px;
  width: 700px;
  height: 500px;
  background-color: brown;
  z-index: 2;
`;

export const ThirdSimpleBanner = styled.div`
  position: absolute;
  left: 7%;
  bottom: 3%;
  width: 700px;
  height: 500px;
  background-color: beige;
  z-index: 1;
`;
