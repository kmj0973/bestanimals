import dynamic from "next/dynamic";
import * as S from "./index.styles";
import { resultProps } from "@/types/home.types";
import Loading from "@/app/_common/Loading";

const AdoptionDetail = (props: {
  infoData: resultProps;
  photoData: resultProps;
}) => {
  const DetailContents = dynamic(
    () => import("./DetailContents/DetailContents"),
    {
      ssr: false,
      loading: () => <Loading />,
    }
  );

  return (
    <S.AdoptionDetailContainer>
      <DetailContents infoData={props.infoData} photoData={props.photoData} />
    </S.AdoptionDetailContainer>
  );
};

export default AdoptionDetail;
