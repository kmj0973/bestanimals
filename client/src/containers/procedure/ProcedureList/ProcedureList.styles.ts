"use client";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import styled, { css, keyframes } from "styled-components";

const updown = keyframes`
  0%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(20px);
  }
`;

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    display: block;
  }
`;

const disappear = keyframes`
  0% {
    display: block;
  }
  100%{
    opacity: 0;
  }
`;

const appearAni = css`
  animation: ${appear} 1.5s ease-out;
  display: block;
  :nth-child(3) {
    :nth-child(1) {
      animation: ${appear} 0.5s ease-out;
    }
    :nth-child(2) {
      animation: ${appear} 1s ease-out;
    }
  }
`;

const disappearAni = css`
  animation: ${disappear} 1.5s ease-out;
  :nth-child(3) {
    :nth-child(1) {
      animation: ${disappear} 1s ease-out;
      display: none;
    }
    :nth-child(2) {
      animation: ${disappear} 0.5s ease-out;
      display: none;
    }
  }
`;

export const UnderArrow = styled.div<{
  $scrollY: number;
}>`
  position: fixed;
  width: 100%;
  max-width: 1440px;
  height: 200px;

  bottom: 0px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${(props) =>
    props.$scrollY > 0 &&
    css`
      animation: ${disappear} 0.5s ease-out;
      display: none;
    `}
`;

export const ArrowIcon = styled(MdKeyboardDoubleArrowDown)`
  width: 100%;
  height: 40%;

  animation: ${updown} infinite 1s ease-out alternate;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 2500px;
  padding: 100px 0px;
  margin: 0px auto;
  background-color: white;
`;

export const ContentBoxContainer = styled.div<{
  $scrollY: number;
  $standardHeight: number;
}>`
  display: none;

  &:nth-child(1) {
    ${(props) => props.$scrollY >= 0 && appearAni}
    ${(props) => props.$scrollY < 0 && disappearAni}
  }
  &:nth-child(2) {
    ${(props) =>
      props.$scrollY >= (2500 - props.$standardHeight * 2) / 12 && appearAni}
    ${(props) =>
      props.$scrollY < (2500 - props.$standardHeight * 2) / 12 && disappearAni}
  }
  &:nth-child(3) {
    ${(props) =>
      props.$scrollY >= (2500 - props.$standardHeight) / 4 && appearAni}
    ${(props) =>
      props.$scrollY < (2500 - props.$standardHeight) / 4 && disappearAni}
  }
  &:nth-child(4) {
    ${(props) =>
      props.$scrollY >= (2700 - props.$standardHeight) / 2 && appearAni}
    ${(props) =>
      props.$scrollY < (2700 - props.$standardHeight) / 2 && disappearAni}
  }
  &:nth-child(5) {
    ${(props) =>
      props.$scrollY >= ((2500 - props.$standardHeight) * 2) / 2 && appearAni}
    ${(props) =>
      props.$scrollY < ((2500 - props.$standardHeight) * 2) / 2 && disappearAni}
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: relative;
  color: white;
`;

export const Circle = styled.div`
  width: 500px;
  height: 100%;

  background-color: #ceaf9c;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;

  font-size: 1.8rem;
  font-weight: 600;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 5;

  font-size: 1.4rem;
  text-align: center;
  margin: 0px 20px 80px 20px;

  line-height: 35px;

  a {
    margin-top: 10px;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.accent};
  }
  a:hover {
    color: brown;
  }
  div {
    line-height: 30px;
    margin-top: 10px;
    font-size: 1.1rem;
  }
`;

export const Line = styled.div`
  width: 50%;
  height: 4px;
  background-color: white;

  position: absolute;
  top: 97px;
`;

export const NoticeBox = styled.div`
  width: 500px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  color: #3b4248;

  div {
    margin: 0px 20px;
  }
`;

export const DotsBox = styled.div`
  position: absolute;
  width: 10%;
  height: 100px;
  top: -100px;
`;

export const RightLargeDot = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #ceaf9c;

  left: 0px;
  bottom: 0px;

  border-radius: 50%;
`;
export const RightSmallDot = styled.div`
  position: absolute;
  width: 75px;
  height: 75px;
  background-color: #ceaf9c;

  bottom: -60px;
  right: -40px;

  border-radius: 50%;
`;

export const LeftLargeDot = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #ceaf9c;

  right: 0px;
  bottom: 0px;

  border-radius: 50%;
`;
export const LeftSmallDot = styled.div`
  position: absolute;
  width: 75px;
  height: 75px;
  background-color: #ceaf9c;

  bottom: -60px;
  left: -40px;

  border-radius: 50%;
`;
