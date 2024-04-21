"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import styled from "styled-components";

export const AdoptListContainer = styled.article`
  max-width: 1440px;
  height: 500px;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const CustomSlider = styled(Slider)`
  padding: 0 2rem;
  height: 100%;
  background-color: #fffcc6;
`;

export const CustomSliderPrevArrow = styled(IoIosArrowBack)`
  color: #724000;
  left: 1rem;
  z-index: 1;
  font-size: 3rem;

  &:hover {
    color: #724000;
  }
`;

export const CustomSliderNextArrow = styled(IoIosArrowForward)`
  color: #724000;
  right: 1rem;
  font-size: 24px;

  &:hover {
    color: #724000;
  }
`;

export const AdoptListWrapper = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: #fffcc6;
`;

export const AdoptLi = styled.div`
  width: 100%;
  height: 90%;
  margin: 0 1.5rem;
  border-radius: 40px;
  background-color: white;
`;
