import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PeopleState {
  valueSearch: string;
}

const initialState: PeopleState = {
  valueSearch: '',
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    handleChange: (state, action: PayloadAction<number>) => {
      state.valueSearch += action.payload;
    },
  },
});

export const { handleChange } = peopleSlice.actions;

export default peopleSlice.reducer;
