"use client";

import Image from "next/image";
import styled from "styled-components";

export const MainBannerCotainer = styled.article`
  width: 100%;
  height: 380px;
  max-width: 1440px;
  margin: 0 auto 30px auto;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 10px 10px;
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
  height: 1400px;
  max-width: 1440px;
  background-color: #fffcc6;
  margin: 0 auto;
`;

export const FirstSimpleBanner = styled.div`
  position: absolute;
  left: 10%;
  top: 5%;
  width: 650px;
  height: 450px;
  background-color: wheat;
  z-index: 3;
`;

export const SecondSimpleBanner = styled.div`
  position: absolute;
  right: 10%;
  top: 475px;
  width: 650px;
  height: 450px;
  background-color: brown;
  z-index: 2;
`;

export const ThirdSimpleBanner = styled.div`
  position: absolute;
  left: 10%;
  bottom: 5%;
  width: 650px;
  height: 450px;
  background-color: beige;
  z-index: 1;
`;
