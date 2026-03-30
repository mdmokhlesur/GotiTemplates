import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CLVRecord } from "@/types";
import { nbaCLVRecords } from "@/data/nba";

interface BetTrackerState {
  bets: CLVRecord[];
}

const initialState: BetTrackerState = {
  bets: nbaCLVRecords,
};

const betTrackerSlice = createSlice({
  name: "betTracker",
  initialState,
  reducers: {
    addBet: (state, action: PayloadAction<CLVRecord>) => {
      state.bets.unshift(action.payload);
    },
    updateResult: (
      state,
      action: PayloadAction<{ betId: string; result: "win" | "loss" | "push" }>
    ) => {
      const bet = state.bets.find((b) => b.betId === action.payload.betId);
      if (bet) bet.result = action.payload.result;
    },
  },
});

export const { addBet, updateResult } = betTrackerSlice.actions;
export default betTrackerSlice.reducer;
