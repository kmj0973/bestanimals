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
  width: 50%;
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
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoBox = styled.div`
  margin-top: 30px;
  font-size: 1.5rem;

  margin-right: 80px;

  &:nth-child(1) {
    margin-bottom: 10px;
  }
`;

export const UnderLine = styled.div`
  width: 50%;
  margin-right: 80px;

  border: 4px solid black;
  margin-top: 40px;
`;

export const Line = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 30px;

  border-bottom: 5px dotted black;
`;

export const YoutubeUrl = styled.a`
  width: auto;
  height: 100px;
  margin-right: 80px;

  position: relative;
  bottom: -30px;

  color: #b38383;
`;

export const DetailCotainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
`;

export const DetailBox = styled.div`
  width: 80%;

  color: #626262;
  font-size: 1.3rem;
  line-height: 1.1;

  margin-bottom: 20px;

  p {
    margin: 0;
  }
`;

export const GuideBox = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GuideContent = styled.div`
  line-height: 1.5;
  font-size: 1rem;

  margin-bottom: 30px;
  padding-left: 20px;
  border-left: 5px solid #97be5a;
`;

export const GuideButton = styled.a`
  width: auto;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;
  padding: 0 30px;

  color: white;
  background-color: #97be5a;
  border-radius: 25px;
`;
