"use client";

import { useEffect } from "react";
import * as S from "./AdoptList.styles";

const AdoptList = () => {
  useEffect(() => {
    fetch(
      "http://openapi.seoul.go.kr:8088/797845717872687236334e636f594d/xml/TbAdpWaitAnimalView/1/5/",
      {
        headers: {
          Accept: "application / json",
        },
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <S.AdoptListContainer>
      <S.AdoptListWrapper>
        <S.AdoptLi></S.AdoptLi>
        <S.AdoptLi></S.AdoptLi>
        <S.AdoptLi></S.AdoptLi>
        <S.AdoptLi></S.AdoptLi>
        <S.AdoptLi></S.AdoptLi>
        <S.AdoptLi></S.AdoptLi>
      </S.AdoptListWrapper>
    </S.AdoptListContainer>
  );
};

export default AdoptList;
