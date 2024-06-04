"use client";

import styled from "styled-components";

export const AdoptionContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  max-width: 1440px;

  padding: 100px 0px;
  margin: 0px auto;
  background-color: #f8f0e3;

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
  width: 120px;
  height: 50px;
  font-size: 1.5rem;
  margin-right: 20px;
  border: none;

  text-align: center;
`;
export const Gender = styled.select`
  width: 100px;
  height: 50px;
  font-size: 1.5rem;
  margin-right: 20px;
  border: none;

  text-align: center;
`;
export const RegionCenter = styled.select`
  width: 150px;
  height: 50px;
  font-size: 1.5rem;
  margin-right: 20px;
  border: none;

  text-align: center;
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

  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;
