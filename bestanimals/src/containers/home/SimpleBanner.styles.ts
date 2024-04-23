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
  background-color: #eed8bc;
  border-radius: 20px 20px 0 0;
  margin: 0 auto;
`;

export const FirstSimpleBanner = styled.div<{
  $scrollY: number;
  $standardHeight: number;
}>`
  position: absolute;
  display: none;
  left: 10%;
  top: 5%;
  width: 650px;
  height: 450px;
  background-color: #faf0e6;
  z-index: 3;
  ${(props) =>
    props.$scrollY >= (2500 - props.$standardHeight) / 4 &&
    css`
      animation: ${leftMove} 1s ease-out;
      display: block;
    `}
  ${(props) =>
    props.$scrollY < (2500 - props.$standardHeight) / 4 &&
    css`
      animation: ${leftMoveDisappear} 1s ease-out;
    `}
`;

export const SecondSimpleBanner = styled.div<{
  $scrollY: number;
  $standardHeight: number;
}>`
  position: absolute;
  display: none;
  right: 10%;
  top: 475px;
  width: 650px;
  height: 450px;
  background-color: #ffe1e1;
  z-index: 2;
  ${(props) =>
    props.$scrollY >= (2500 - props.$standardHeight) / 2 &&
    css`
      animation: ${rightMove} 1s ease-out;
      display: block;
    `}
  ${(props) =>
    props.$scrollY < (2500 - props.$standardHeight) / 2 &&
    css`
      animation: ${rightMoveDisappear} 1s ease-out;
    `}
`;

export const ThirdSimpleBanner = styled.div<{
  $scrollY: number;
  $standardHeight: number;
}>`
  position: absolute;
  display: none;
  left: 10%;
  bottom: 5%;
  width: 650px;
  height: 450px;
  background-color: #fff1c1;
  z-index: 1;
  ${(props) =>
    props.$scrollY >= ((2500 - props.$standardHeight) * 3) / 4 &&
    css`
      animation: ${leftMove} 1s ease-out;
      display: block;
    `}
  ${(props) =>
    props.$scrollY < ((2500 - props.$standardHeight) * 3) / 4 &&
    css`
      animation: ${leftMoveDisappear} 1s ease-out;
    `}
`;
