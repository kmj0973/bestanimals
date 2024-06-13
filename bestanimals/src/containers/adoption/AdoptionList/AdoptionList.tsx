"use client";

import { resultProps } from "@/types/home.types";
import * as S from "./AdoptionList.styles";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdoptionList = (props: {
  resultInfoData: Array<resultProps>;
  duplicatePhotoData: Array<resultProps>;
  options: Array<string>;
}) => {
  const pathName = usePathname();

  const [isHover, setIsHover] = useState<string | undefined>("0");

  const onHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isHover === "0") setIsHover(e.currentTarget.dataset.id);
  };

  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isHover !== "0") setIsHover("0");
  };

  return (
    <S.AdoptionListContainer>
      {props.resultInfoData.map((info: resultProps, i: number) => {
        if (
          info.NM.includes(props.options[2]) &&
          info.SPCS.includes(props.options[0]) &&
          info.SEXDSTN.includes(props.options[1])
        ) {
          return (
            <S.AdoptListWrapper key={info.ANIMAL_NO}>
              <S.AdoptLi
                data-id={info.ANIMAL_NO}
                color={info.SEXDSTN == "M" ? "#55bffb" : "#ffa9a9"}
                onMouseOver={onHover}
                onMouseLeave={onLeave}
              >
                {props.duplicatePhotoData.map((photo: resultProps) => {
                  if (photo.ANIMAL_NO == info.ANIMAL_NO)
                    return (
                      <S.AdoptLiPhoto
                        key={info.ANIMAL_NO}
                        src={`https://` + photo.PHOTO_URL}
                        alt="animal_photo_image"
                      />
                    );
                })}
                <S.AdoptLiInfo>
                  {info.SEXDSTN == "M" ? (
                    <S.Male size="40px" />
                  ) : (
                    <S.Female size="40px" />
                  )}
                  <S.AnimalName>{info.BREEDS}</S.AnimalName>
                </S.AdoptLiInfo>
                {String(info.ANIMAL_NO) == isHover ? (
                  <S.AdoptDetailInfo>
                    <S.DetailInfo>이름: {info.NM}</S.DetailInfo>
                    <S.DetailInfo>나이: {info.AGE}</S.DetailInfo>
                    <S.DetailInfo>체중: {info.BDWGH}kg</S.DetailInfo>
                    <S.DetailInfo>입양 상태: {info.ADP_STTUS}</S.DetailInfo>
                    <S.DetailInfo>
                      임시 보호 상태: {info.TMPR_PRTC_STTUS}
                    </S.DetailInfo>
                    <Link href={pathName + "/" + info.ANIMAL_NO}>
                      자세히 보기
                    </Link>
                  </S.AdoptDetailInfo>
                ) : null}
              </S.AdoptLi>
            </S.AdoptListWrapper>
          );
        }
      })}
    </S.AdoptionListContainer>
  );
};

export default AdoptionList;
