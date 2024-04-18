import * as S from "./index.styles";
import main_banner from "../../../public/images/home/main_banner.jpg";
import AdoptList from "./AdoptList";

const Home = () => {
  return (
    <main>
      <S.MainBannerCotainer>
        <S.MainBlurImage src={main_banner} alt="blur_image" />
        <S.MainBannerImage src={main_banner} alt="banner_image" />
      </S.MainBannerCotainer>
      <AdoptList />
      <S.SimpleBannerContainer>
        <S.FirstSimpleBanner></S.FirstSimpleBanner>
        <S.SecondSimpleBanner></S.SecondSimpleBanner>
        <S.ThirdSimpleBanner></S.ThirdSimpleBanner>
      </S.SimpleBannerContainer>
    </main>
  );
};

export default Home;
