"use client";

import styled from "styled-components";

export const ProcedureContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 70px;
  margin: 1px 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff3e3;
  color: #3b4248;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 100px 0px;
  margin: 0px auto;
  background-color: #f8f0e3;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: relative;
  color: white;
`;

export const Circle = styled.div`
  width: 500px;
  height: 100%;

  background-color: #ceaf9c;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;

  font-size: 1.8rem;
  font-weight: 600;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 5;

  font-size: 1.4rem;
  text-align: center;
  margin: 0px 20px 80px 20px;

  line-height: 35px;

  a {
    margin-top: 10px;
    font-size: 1.1rem;
    color: #724000;
  }
  a:hover {
    color: brown;
  }
  div {
    line-height: 30px;
    margin-top: 10px;
    font-size: 1.1rem;
  }
`;

export const Line = styled.div`
  width: 50%;
  height: 4px;
  background-color: white;

  position: absolute;
  top: 97px;
`;

export const NoticeBox = styled.div`
  width: 500px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  color: #3b4248;

  div {
    margin: 0px 20px;
  }
`;

export const DotsBox = styled.div`
  position: absolute;
  width: 10%;
  height: 100px;
  bottom: 0px;
`;

export const RightLargeDot = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #ceaf9c;

  left: 0px;
  bottom: 0px;

  border-radius: 50%;
`;
export const RightSmallDot = styled.div`
  position: absolute;
  width: 75px;
  height: 75px;
  background-color: #ceaf9c;

  bottom: -60px;
  right: -40px;

  border-radius: 50%;
`;

export const LeftLargeDot = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #ceaf9c;

  right: 0px;
  bottom: 0px;

  border-radius: 50%;
`;
export const LeftSmallDot = styled.div`
  position: absolute;
  width: 75px;
  height: 75px;
  background-color: #ceaf9c;

  bottom: -60px;
  left: -40px;

  border-radius: 50%;
`;
