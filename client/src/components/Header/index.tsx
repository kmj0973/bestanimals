"use client";

import { usePathname } from "next/navigation";
import { ROUTES } from "./constants";
import * as S from "./index.styles";
import header_logo from "../../../public/images/header/header_logo.png";
import header_nav_accent from "../../../public/images/header/header_nav_accent.png";
import Link from "next/link";
import { MouseEventHandler } from "react";

const Header = () => {
  const pathName = usePathname();

  const handleClick: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <S.HeaderContainer>
        <S.HeaderWrap>
          <S.LogoImageContainer href="/">
            <S.LogoImage src={header_logo} alt="logo" />
          </S.LogoImageContainer>
          <S.MenuContainer>
            {ROUTES.map((route) => {
              const { href, title } = route;
              return (
                <S.Menu
                  key={title}
                  onClick={handleClick}
                  color={
                    (
                      href.length > 1
                        ? pathName.includes(href)
                        : href == pathName
                    )
                      ? "#724000"
                      : "black"
                  }
                >
                  {(
                    href.length > 1 ? pathName.includes(href) : href == pathName
                  ) ? (
                    <S.NavAccentImage src={header_nav_accent} alt="aceent" />
                  ) : null}
                  <Link href={href}>{title}</Link>
                </S.Menu>
              );
            })}
          </S.MenuContainer>
          {/* <S.UserLoginContainer>
            <S.UserLogin>로그인</S.UserLogin>
          </S.UserLoginContainer> */}
        </S.HeaderWrap>
      </S.HeaderContainer>
    </header>
  );
};

export default Header;
