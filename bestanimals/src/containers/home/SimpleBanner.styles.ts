import styled, { css, keyframes } from "styled-components";

const leftMove = keyframes`
  0% {
    left: 0%;
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
    left:0%;
    opacity: 0;
  }
`;
const rightMove = keyframes`
  0% {
    right: 0%;
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
    right: 0%;
    opacity: 0;
  }
`;

export const SimpleBannerContainer = styled.article`
  position: relative;
  width: 100%;
  height: 1400px;
  max-width: 1440px;
  border-radius: 20px 20px 0 0;
  margin: 0 auto;
  background-color: #f8f0e3;
  /* background: rgba(238, 216, 188, 0.8); */
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
  background-color: #ece1cb;
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
  background-color: #eec5cf;
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
  background-color: #eaeec5;
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

export const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const MainText = styled.p`
  width: 350px;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.6;
  color: white;
  padding-left: 30px;
`;

export const SubText = styled.p`
  cursor: pointer;
  width: 150px;
  text-align: center;
  font-size: 2rem;
  line-height: 1.3;
  color: white;
  padding-right: 30px;
  & > a {
    color: white;
    &:hover {
      color: #724000;
    }
  }
`;
