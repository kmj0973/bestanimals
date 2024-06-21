"use client";

import * as S from "./index.styles";
import main_banner from "../../../public/images/home/main_banner.jpg";
import SimpleBanner from "./SimpleBanner/SimpleBanner";
import AdoptList from "./AdoptList/AdoptList";

const Home = () => {
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
      <AdoptList />
      <SimpleBanner />
    </main>
  );
};

export default Home;
