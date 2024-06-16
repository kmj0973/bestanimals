import { PiGenderFemaleBold, PiGenderMaleBold } from "react-icons/pi";
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

  background-color: white;
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

  border-radius: 20px;

  object-fit: fill;
`;

export const NameBox = styled.div`
  color: black;
  font-size: 1.2rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Female = styled(PiGenderFemaleBold)`
  margin-bottom: 10px;
  color: #ffa9a9;
`;

export const Male = styled(PiGenderMaleBold)`
  margin-bottom: 5px;
  margin-left: 3px;
  color: #55bffb;
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

  background-color: white;
`;

export const DetailBox = styled.div`
  width: 80%;

  color: #2b2b2b;
  font-size: 1.3rem;
  line-height: 1.1;

  margin: 20px 0;

  p {
    margin: 0;
  }
`;

export const YoutubeUrl = styled.a`
  width: auto;
  height: 100px;

  position: relative;
  bottom: -30px;

  color: #b38383;
`;
