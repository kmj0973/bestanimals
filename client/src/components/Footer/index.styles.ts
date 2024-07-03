"use client";

import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 3px solid ${({ theme }) => theme.colors.accent};
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
`;
