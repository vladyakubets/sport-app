import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Sport, Trn } from "../../types/sport";

// Define a type for the slice state
interface State {
  sports: Sport[];
  currentSport?: Sport;
  selectedTournament?: Trn;
}

// Define the initial state using that type
const initialState: State = {
  sports: [],
};

export const sportListSlice = createSlice({
  name: "sportList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSportList: (state, action: PayloadAction<Sport[]>) => {
      state.sports = action.payload;
      state.currentSport = action.payload[0];
      state.selectedTournament = action.payload[0].Ct[0].Trn[0];
    },
    setCurrentSport: (state, action: PayloadAction<Sport>) => {
      state.currentSport = action.payload;
    },
    setCurrentTournament: (state, action: PayloadAction<Trn>) => {
      state.selectedTournament = action.payload;
    },
  },
});

export const { setSportList, setCurrentSport, setCurrentTournament } =
  sportListSlice.actions;

export default sportListSlice.reducer;
