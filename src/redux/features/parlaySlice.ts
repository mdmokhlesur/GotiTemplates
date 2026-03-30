import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ParlayLeg } from "@/types";

interface ParlayState {
  legs: ParlayLeg[];
}

const initialState: ParlayState = {
  legs: [],
};

const parlaySlice = createSlice({
  name: "parlay",
  initialState,
  reducers: {
    addLeg: (state, action: PayloadAction<ParlayLeg>) => {
      const exists = state.legs.find((l) => l.id === action.payload.id);
      if (!exists) {
        state.legs.push(action.payload);
      }
    },
    removeLeg: (state, action: PayloadAction<string>) => {
      state.legs = state.legs.filter((l) => l.id !== action.payload);
    },
    clearParlay: (state) => {
      state.legs = [];
    },
  },
});

export const { addLeg, removeLeg, clearParlay } = parlaySlice.actions;
export default parlaySlice.reducer;
