import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Match } from "../../types/betslip";

// Define a type for the slice state
interface State {
  Matches: Match[];
}

// Define the initial state using that type
const initialState: State = {
  Matches: [],
};

export const betslipSlice = createSlice({
  name: "betslip",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<Match[]>) => {
      state.Matches = action.payload;
    },
  },
});

export const { setMatches } = betslipSlice.actions;

export default betslipSlice.reducer;
