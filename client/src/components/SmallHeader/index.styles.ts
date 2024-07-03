"use client";

import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 70px;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  font-size: 1.5rem;
  font-weight: 600;

  border-bottom: 3px solid ${({ theme }) => theme.colors.main};
`;
