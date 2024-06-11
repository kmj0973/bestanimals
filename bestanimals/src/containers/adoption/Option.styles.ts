import styled, { css } from "styled-components";

const btnStyle = css`
  width: auto;
  height: 50px;
  font-size: 1.2rem;
  margin-right: 20px;
  padding: 10px;

  border: none;
  border-radius: 10px;

  text-align: center;
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

  border-radius: 10px;

  background-color: #fff3e3;

  font-size: 1.3rem;
`;
