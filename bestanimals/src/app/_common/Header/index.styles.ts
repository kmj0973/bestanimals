"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #fff3e3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 1040px;
  height: 80px;
`;

export const LogoImageContainer = styled(Link)`
  width: 35%;
  height: 100%;
  margin-left: 5%;
`;

export const LogoImage = styled(Image)`
  height: 100%;
  object-fit: contain;
`;

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
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
  margin-right: 5%;
`;

export const UserLogin = styled.div`
  text-align: center;
`;
