import styled, { keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const rotate = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;
export const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 1s ease-out;
`;

export const LoadingCircle = styled(AiOutlineLoading3Quarters)`
  width: 100px;
  height: 100px;

  animation: ${rotate} 3s linear infinite;
`;
