import { useQuery } from "react-query";
import { axiosInstance } from ".";
import { useAppDispatch } from "../hooks";
import { setSportList } from "../store/slices";
import { SportResponse } from "../types/sport";

export const useSportList = () => {
  const dispatch = useAppDispatch();
  const fetchSportList = async () => {
    const res = await axiosInstance.post(
      "/prematch/menu",
      JSON.stringify({
        Interval: 5,
      })
    );
    return res.data;
  };

  return useQuery<SportResponse, Error>("fetchSportList", fetchSportList, {
    onSuccess(data) {
      dispatch(setSportList(data.S));
    },
    cacheTime: 90000,
    refetchOnWindowFocus: false,
  });
};
