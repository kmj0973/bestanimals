"use client";

import Image from "next/image";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #fff3e3;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled(Image)`
  width: 35%;
  height: 100%;
  object-fit: contain;
  margin-left: 5%;
`;

export const CategoryContainer = styled.div`
  width: 50%;
  margin-right: 10%;
`;

export const CategoryWrap = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const Category = styled.li<{ color: string }>`
  a {
    position: relative;
    color: ${(props) => props.color};
    font-size: 20px;
    font-weight: 600;
    z-index: 1;
  }
  position: relative;
  padding: 0 10px;
`;

export const NavAccentImage = styled(Image)`
  position: absolute;
  top: -5px;
  right: 1px;
  width: 20px;
  height: 18px;
`;
