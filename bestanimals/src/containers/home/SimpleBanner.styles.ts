import styled, { css, keyframes } from "styled-components";

const leftMove = keyframes`
  0% {
    left: -10%;
    opacity: 0;
  }
  100%{
    left: 10%;
  }
`;
const leftMoveDisappear = keyframes`
  0%{
    left: 10%;
    display: block;
  }
  100%{
    left:-10%;
    opacity: 0;
  }
`;
const rightMove = keyframes`
  0% {
    right: -10%;
    opacity: 0;
  }
  100%{
    right: 10%;
  }
`;
const rightMoveDisappear = keyframes`
  0%{
    right: 10%;
    display: block;
  }
  100%{
    right:-10%;
    opacity: 0;
  }
`;

export const SimpleBannerContainer = styled.article`
  position: relative;
  width: 100%;
  height: 1400px;
  max-width: 1440px;
  background-color: #fffcc6;
  margin: 0 auto;
`;

export const FirstSimpleBanner = styled.div<{ scrollY: number }>`
  position: absolute;
  display: none;
  left: 10%;
  top: 5%;
  width: 650px;
  height: 450px;
  background-color: wheat;
  z-index: 3;
  ${(props) =>
    props.scrollY >= 300 &&
    css`
      animation: ${leftMove} 1s ease-out;
      display: block;
    `}
  ${(props) =>
    props.scrollY < 300 &&
    css`
      animation: ${leftMoveDisappear} 1s ease-out;
    `}
`;

export const SecondSimpleBanner = styled.div<{ scrollY: number }>`
  position: absolute;
  display: none;
  right: 10%;
  top: 475px;
  width: 650px;
  height: 450px;
  background-color: brown;
  z-index: 2;
  ${(props) =>
    props.scrollY >= 500 &&
    css`
      animation: ${rightMove} 1s ease-out;
      display: block;
    `}
  ${(props) =>
    props.scrollY < 500 &&
    css`
      animation: ${rightMoveDisappear} 1s ease-out;
    `}
`;

export const ThirdSimpleBanner = styled.div<{ scrollY: number }>`
  position: absolute;
  display: none;
  left: 10%;
  bottom: 5%;
  width: 650px;
  height: 450px;
  background-color: beige;
  z-index: 1;
  ${(props) =>
    props.scrollY >= 700 &&
    css`
      animation: ${leftMove} 1s ease-out;
      display: block;
    `}
  ${(props) =>
    props.scrollY < 700 &&
    css`
      animation: ${leftMoveDisappear} 1s ease-out;
    `}
`;
