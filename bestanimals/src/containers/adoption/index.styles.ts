"use client";

import styled, { css } from "styled-components";

const btnStyle = css`
  width: auto;
  height: 50px;
  font-size: 1.5rem;
  margin-right: 20px;
  padding: 3px;

  border: none;

  text-align: center;
`;

export const AdoptionContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  max-width: 1440px;

  margin: 0px auto;
  background-color: #f8f0e3;

  display: flex;
  flex-direction: column;
`;

export const OptionContainer = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Species = styled.select`
  ${btnStyle}
  transition: all 1s ease-out;
`;
export const Gender = styled.select`
  ${btnStyle}
`;
export const RegionCenter = styled.select`
  ${btnStyle}
`;

export const SearchButton = styled.button`
  width: 100px;
  height: 50px;
  border: none;

  font-size: 1.5rem;
`;

export const AdoptionListContainer = styled.div`
  width: 100%;
  height: 2000px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: auto;
`;
