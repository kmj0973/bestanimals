import Contents from "./Contents/Contents";
import * as S from "./index.styles";
import SmallHeader from "@/app/_common/SmallHeader";

const Adoption = () => {
  return (
    <main>
      <S.AdoptionContainer>
        <SmallHeader content={"유기동물 입양"} />
        <Contents />
      </S.AdoptionContainer>
    </main>
  );
};

export default Adoption;
