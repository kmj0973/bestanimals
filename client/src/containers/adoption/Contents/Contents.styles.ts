import Link from "next/link";
import styled, { css } from "styled-components";

const btnStyle = css`
  width: auto;
  height: 50px;
  font-size: 1.2rem;
  font-weight: 600;

  margin-right: 20px;
  padding: 0 10px;

  border: 2px solid #c5a999;
  border-radius: 10px;
  color: #724000;

  text-align: center;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  max-width: 1440px;

  margin: 0px auto;
  background-color: white;

  display: flex;
  flex-direction: column;
`;

export const OptionContainer = styled.form`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Species = styled.select`
  ${btnStyle}
`;
export const Gender = styled.select`
  ${btnStyle}
`;
export const RegionCenter = styled.select`
  ${btnStyle}
`;
