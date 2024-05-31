import * as S from "./index.styles";

const SmallHeader = (props: { content: string }) => {
  return <S.Header>{props.content}</S.Header>;
};

export default SmallHeader;
