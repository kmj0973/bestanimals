"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 80px;

  border-bottom: 3px solid ${({ theme }) => theme.colors.accent};
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

export const LogoImageContainer = styled(Link)`
  width: 35%;
  height: 100%;
`;

export const LogoImage = styled(Image)`
  height: 100%;
  object-fit: contain;
`;

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  min-width: 500px;
  padding-left: 0;
  list-style: none;
`;

export const Menu = styled.li<{ color: string }>`
  a {
    position: relative;
    color: ${(props) => props.color};
    font-size: 20px;
    font-weight: 600;
    z-index: 1;
  }
  position: relative;
  padding: 0 20px;
  margin: 0 5px;
`;

export const NavAccentImage = styled(Image)`
  position: absolute;
  top: -5px;
  right: 10px;
  width: 20px;
  height: 18px;
`;

export const UserLoginContainer = styled.div`
  width: 25%;
  min-width: 100px;
`;

export const UserLogin = styled.div`
  text-align: center;
`;
