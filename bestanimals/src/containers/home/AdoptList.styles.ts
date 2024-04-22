"use client";

import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PiGenderMaleBold, PiGenderFemaleBold } from "react-icons/pi";
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
  position: relative;
  left: 1.3rem;
  bottom: 1rem;

  &:hover {
    color: #724000;
  }
`;

export const CustomSliderNextArrow = styled(IoIosArrowForward)`
  color: #724000;
  position: relative;
  right: 3rem;
  bottom: 1rem;

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

export const AdoptLi = styled.div<{ colors: string }>`
  width: 100%;
  max-width: 375px;
  height: 90%;
  margin: 0 1.5rem;
  border: 3px solid ${(props) => props.colors};
  border-radius: 40px;
  background-color: white;
`;

export const AdoptLiPhoto = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 38px 38px 0 0;
  object-fit: cover;
`;

export const AdoptLiInfo = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 1.5rem;
`;

export const Female = styled(PiGenderFemaleBold)`
  color: #ffa9a9;
`;

export const Male = styled(PiGenderMaleBold)`
  color: #55bffb;
`;

export const AnimalName = styled.div`
  padding-top: 1rem;
`;
