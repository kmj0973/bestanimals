import styled from "styled-components";

export const ContentsContainer = styled.div`
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: aliceblue;
`;

export const PhotoNameWrapper = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const PhotoBox = styled.img`
  width: 80%;
  height: 400px;

  border: 3px solid black;
  border-radius: 20px;

  object-fit: fill;
`;

export const NameBox = styled.div`
  color: black;
  font-size: 1.2rem;
`;

export const InfoWrapper = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InfoBox = styled.div`
  margin-top: 30px;
  font-size: 1.5rem;

  &:nth-child(1) {
    margin-bottom: 10px;
  }
`;
export const UnderLine = styled.div`
  width: 60%;

  border: 4px solid black;
  margin-top: 40px;
`;

export const DetailCotainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: green;
`;

export const DetailBox = styled.div`
  width: 80%;

  font-size: 1.2rem;
  line-height: 1.1;
`;
