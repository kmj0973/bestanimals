import * as S from "./index.styles";
import ProcedureList from "./ProcedureList";
import SmallHeader from "@/app/_common/SmallHeader";

const Procedure = () => {
  return (
    <main>
      <S.ProcedureContainer>
        <SmallHeader content={"입양 절차"} />
        <ProcedureList />
      </S.ProcedureContainer>
    </main>
  );
};

export default Procedure;
