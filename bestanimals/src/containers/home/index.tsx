"use client";

import * as S from "./index.styles";
import main_banner from "../../../public/images/home/main_banner.jpg";
import SimpleBanner from "./SimpleBanner/SimpleBanner";
import { useInfoData, usePhotoData } from "../adoption/index.hooks";
import dynamic from "next/dynamic";
import Loading from "@/app/_common/Loading";

const Home = () => {
  const { infoData } = useInfoData();
  const { photoData } = usePhotoData();

  const AdoptList = dynamic(() => import("./AdoptList/AdoptList"), {
    ssr: false,
    loading: () => <Loading />,
  });

  return (
    <main>
      <S.MainBannerCotainer>
        <S.MainBlurImage
          src={main_banner}
          alt="blur_image"
          priority
          placeholder="blur"
        />
        <S.MainBannerImage
          src={main_banner}
          alt="banner_image"
          priority
          placeholder="blur"
        />
      </S.MainBannerCotainer>
      <AdoptList resultInfoData={infoData} duplicatePhotoData={photoData} />
      <SimpleBanner />
    </main>
  );
};

export default Home;
