import * as S from "./index.styles";
import main_banner from "../../../public/images/home/main_banner.jpg";
import AdoptList from "./AdoptList";
import SimpleBanner from "./SimpleBanner";
import { resultProps } from "@/types/home.types";

const Home = async () => {
  const infoData = await fetch(
    "http://openapi.seoul.go.kr:8088/797845717872687236334e636f594d/json/TbAdpWaitAnimalView/1/20/",
    {
      headers: {
        Accept: "application / json",
      },
      method: "GET",
      next: { revalidate: 50 },
    }
  ).then((res) => res.json());

  const photoData = await fetch(
    "http://openapi.seoul.go.kr:8088/764d76474f7268723131366c4f63756e/json/TbAdpWaitAnimalPhotoView/1/500/",
    {
      headers: {
        Accept: "application / json",
      },
      method: "GET",
      cache: "no-store",
    }
  ).then((res) => res.json());

  const resultInfoData = infoData.TbAdpWaitAnimalView.row;

  const resultPhotoData = photoData.TbAdpWaitAnimalPhotoView.row;

  const duplicatePhotoData = resultPhotoData.reduce(
    (prev: Array<resultProps>, now: resultProps) => {
      //중복제거 함수
      if (!prev.some((obj) => obj.ANIMAL_NO === now.ANIMAL_NO)) {
        prev.push(now);
      }
      return prev;
    },
    []
  );

  return (
    <main>
      <S.MainBannerCotainer>
        <S.MainBlurImage src={main_banner} alt="blur_image" />
        <S.MainBannerImage src={main_banner} alt="banner_image" />
      </S.MainBannerCotainer>
      <AdoptList
        resultInfoData={resultInfoData}
        duplicatePhotoData={duplicatePhotoData}
      />
      <SimpleBanner />
    </main>
  );
};

export default Home;
