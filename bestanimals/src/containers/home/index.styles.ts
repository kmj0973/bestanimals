"use client";

import Image from "next/image";
import styled from "styled-components";

export const MainBannerCotainer = styled.article`
  width: 100%;
  height: 380px;
  max-width: 1440px;
  margin: 1px auto 30px auto;
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
