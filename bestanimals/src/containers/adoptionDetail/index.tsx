"use client";

import dynamic from "next/dynamic";
import * as S from "./index.styles";
import Loading from "@/app/_common/Loading";

const AdoptionDetail = () => {
  const DetailContents = dynamic(
    () => import("./DetailContents/DetailContents"),
    {
      loading: () => <Loading />,
    }
  );

  return (
    <S.AdoptionDetailContainer>
      <DetailContents />
    </S.AdoptionDetailContainer>
  );
};

export default AdoptionDetail;
