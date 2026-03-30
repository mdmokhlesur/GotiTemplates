import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SportState {
  activeSport: string;
}

const initialState: SportState = {
  activeSport: 'NBA',
};

const sportSlice = createSlice({
  name: 'sport',
  initialState,
  reducers: {
    setActiveSport: (state, action: PayloadAction<string>) => {
      state.activeSport = action.payload;
    },
  },
});

export const { setActiveSport } = sportSlice.actions;

export default sportSlice.reducer;
