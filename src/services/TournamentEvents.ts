import { useQuery, UseQueryOptions } from "react-query";
import { axiosInstance } from ".";
import { useAppDispatch } from "../hooks";
import { setTournamentEvents } from "../store/slices/tournamentEvents";
import { TournamentEvent } from "../types/tournamentEvent";

export const useTournamentEvents = (
  tournamentId: number | undefined,
  options?: Omit<
    UseQueryOptions<TournamentEvent, Error>,
    "queryKey" | "queryFn"
  >
) => {
  const dispatch = useAppDispatch();
  const fetchTournamentEvents = async () => {
    const res = await axiosInstance.post(
      "/prematch/tournament",
      JSON.stringify({
        Interval: 5,
        MarketId: null,
        Mobile: true,
        TournamentId: tournamentId, // Tournament Id from Menu
      })
    );
    return res.data;
  };

  return useQuery<TournamentEvent, Error>(
    [tournamentId],
    fetchTournamentEvents,
    {
      ...options,
      onSuccess(data) {
        dispatch(setTournamentEvents(data || []));
      },
    }
  );
};
