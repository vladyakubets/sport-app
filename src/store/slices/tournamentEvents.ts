import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TournamentEvent } from "../../types/tournamentEvent";

// Define a type for the slice state
interface State {
  tournament?: TournamentEvent;
}

// Define the initial state using that type
const initialState: State = {};

export const tournamentEventsSlice = createSlice({
  name: "sportList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTournamentEvents: (state, action: PayloadAction<TournamentEvent>) => {
      state.tournament = action.payload;
    },
  },
});

export const { setTournamentEvents } = tournamentEventsSlice.actions;

export default tournamentEventsSlice.reducer;
