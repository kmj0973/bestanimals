import { PiGenderFemaleBold, PiGenderMaleBold } from "react-icons/pi";
import styled from "styled-components";

export const AdoptionListContainer = styled.div`
  width: 100%;
  height: 2000px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: auto;
  align-content: start;
`;

export const AdoptListWrapper = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin: 0 auto;
`;

export const AdoptLi = styled.div<{ color: string }>`
  position: relative;
  width: 100%;
  min-width: 275px;
  height: 90%;
  margin: 0 1.5rem;
  border: 3px solid ${(props) => props.color};
  border-radius: 40px;
  background-color: white;
`;

export const AdoptLiPhoto = styled.img`
  width: 100%;
  height: 300px;
  min-height: 300px;
  border-radius: 38px 38px 0 0;
  object-fit: cover;
`;

export const AdoptLiInfo = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 1.5rem;
`;

export const Female = styled(PiGenderFemaleBold)`
  color: #ffa9a9;
`;

export const Male = styled(PiGenderMaleBold)`
  color: #55bffb;
`;

export const AnimalName = styled.div`
  padding-top: 1rem;
`;

export const AdoptDetailInfo = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  border-radius: 38px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: white;
    font-size: 1.5rem;
    padding: 15px;

    border: 3px solid white;
    border-radius: 15px;

    cursor: pointer;
  }
`;

export const DetailInfo = styled.div`
  color: white;
  font-size: 1.5rem;
  padding: 15px 15px 0 15px;
`;
