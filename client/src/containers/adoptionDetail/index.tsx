"use client";

import * as S from "./index.styles";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";

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
