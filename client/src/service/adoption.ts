import { resultProps } from "@/types/home.types";
import axios from "axios";

export const getAnimalInfoData = async () => {
  try {
    const data = await axios(
      "/api/797845717872687236334e636f594d/json/TbAdpWaitAnimalView/1/50/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.data.TbAdpWaitAnimalView.row);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getAnimalPhotoData = async () => {
  try {
    const data = await axios(
      "/api/764d76474f7268723131366c4f63756e/json/TbAdpWaitAnimalPhotoView/1/1000/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
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
  } catch (err) {
    console.log(err);
  }
};

export const getSingleAnimalInfoData = async (animalID: number) => {
  const data = await axios(
    "/api/797845717872687236334e636f594d/json/TbAdpWaitAnimalView/1/50/"
  )
    .then((res) => res.data.TbAdpWaitAnimalView.row)
    .then((arr) => arr.find((info: resultProps) => info.ANIMAL_NO == animalID));

  return data;
};

export const getSingleAnimalPhotoData = async (animalID: number) => {
  const data = await axios(
    "/api/764d76474f7268723131366c4f63756e/json/TbAdpWaitAnimalPhotoView/1/1000/"
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
