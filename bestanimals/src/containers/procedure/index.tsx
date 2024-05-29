import * as S from "./index.styels";
import ProcedureList from "./ProcedureList";

const Procedure = () => {
  return (
    <main>
      <S.ProcedureContainer>
        <S.Header>입양 절차</S.Header>
        <ProcedureList />
      </S.ProcedureContainer>
    </main>
  );
};

export default Procedure;
