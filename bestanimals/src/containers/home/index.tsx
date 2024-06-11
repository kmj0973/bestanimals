"use client";

import * as S from "./index.styles";
import main_banner from "../../../public/images/home/main_banner.jpg";
import AdoptList from "./AdoptList";
import SimpleBanner from "./SimpleBanner";
import { useInfoData, usePhotoData } from "../adoption/index.hooks";

const Home = () => {
  const { infoData } = useInfoData();
  const { photoData } = usePhotoData();

  return (
    <main>
      <S.MainBannerCotainer>
        <S.MainBlurImage src={main_banner} alt="blur_image" />
        <S.MainBannerImage src={main_banner} alt="banner_image" />
      </S.MainBannerCotainer>
      <AdoptList resultInfoData={infoData} duplicatePhotoData={photoData} />
      <SimpleBanner />
    </main>
  );
};

export default Home;
