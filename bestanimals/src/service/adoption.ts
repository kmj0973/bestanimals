import { resultProps } from "@/types/home.types";
import axios from "axios";

export const getAnimalInfoData = async () => {
  const data = await axios(
    "http://openapi.seoul.go.kr:8088/797845717872687236334e636f594d/json/TbAdpWaitAnimalView/1/50/"
  ).then((res) => res.data.TbAdpWaitAnimalView.row);

  return data;
};

export const getAnimalPhotoData = async () => {
  const data = await axios(
    "http://openapi.seoul.go.kr:8088/764d76474f7268723131366c4f63756e/json/TbAdpWaitAnimalPhotoView/1/1000/"
  ).then((res) =>
    res.data.TbAdpWaitAnimalPhotoView.row.reduce(
      (prev: Array<resultProps>, now: resultProps) => {
        //중복제거 함수
        if (!prev.some((obj) => obj.ANIMAL_NO === now.ANIMAL_NO)) {
          prev.push(now);
        }
        return prev;
      },
      []
    )
  );
  return data;
};

export const getSingleAnimalInfoData = async (animalID: number) => {
  const data = await axios(
    "http://openapi.seoul.go.kr:8088/797845717872687236334e636f594d/json/TbAdpWaitAnimalView/1/50/"
  )
    .then((res) => res.data.TbAdpWaitAnimalView.row)
    .then((arr) => arr.find((info: resultProps) => info.ANIMAL_NO == animalID));

  return data;
};

export const getSingleAnimalPhotoData = async (animalID: number) => {
  const data = await axios(
    "http://openapi.seoul.go.kr:8088/764d76474f7268723131366c4f63756e/json/TbAdpWaitAnimalPhotoView/1/1000/"
  )
    .then((res) =>
      res.data.TbAdpWaitAnimalPhotoView.row.reduce(
        (prev: Array<resultProps>, now: resultProps) => {
          //중복제거 함수
          if (!prev.some((obj) => obj.ANIMAL_NO === now.ANIMAL_NO)) {
            prev.push(now);
          }
          return prev;
        },
        []
      )
    )
    .then((arr) => arr.find((info: resultProps) => info.ANIMAL_NO == animalID));
  return data;
};
