import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  valueSearch: string;
  page: string;
}

const initialState: IInitialState = {
  valueSearch: localStorage.getItem('searchParam') || '',
  page: '1',
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    handleChange: (state, action: PayloadAction<string>) => {
      state.valueSearch = action.payload;
    },
    changePage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
  },
});

export const { handleChange, changePage } = peopleSlice.actions;

export default peopleSlice.reducer;
