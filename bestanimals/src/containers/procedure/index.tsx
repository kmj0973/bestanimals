import * as S from "./index.styles";
import ProcedureList from "./ProcedureList/ProcedureList";
import SmallHeader from "@/components/SmallHeader";

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
