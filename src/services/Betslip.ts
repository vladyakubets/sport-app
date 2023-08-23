import { useMutation } from "react-query";
import { axiosInstance } from ".";
import { useAppDispatch } from "../hooks";
import { setMatches } from "../store/slices/betslip";
import { Betslip } from "../types/betslip";

export const useBetSlip = () => {
  const dispatch = useAppDispatch();
  const fetchBetSlip = async (id: number) => {
    const res = await axiosInstance.post(
      "/betslip",
      JSON.stringify({
        Id: id, // OutcomeId
        Ticket: [], // Tickets in your store
        Type: "O",
      })
    );
    return res.data;
  };

  return useMutation<Betslip, Error, number>("betslip", fetchBetSlip, {
    onSuccess(data, variables, context) {
      dispatch(setMatches(data.Matches));
    },
  });
};
