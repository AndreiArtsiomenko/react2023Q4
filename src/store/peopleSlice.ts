import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PeopleType } from '../types/types';

interface IInitialState {
  people: PeopleType[];
  valueSearch: string;
  page: string;
}

const initialState: IInitialState = {
  people: [],
  valueSearch: localStorage.getItem('searchParam') || '',
  page: '1',
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPeople: (state, action: PayloadAction<PeopleType[]>) => {
      state.people = [...state.people, ...action.payload];
    },
    handleChange: (state, action: PayloadAction<string>) => {
      state.valueSearch = action.payload;
    },
    changePage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
  },
});

export const { addPeople, handleChange, changePage } = peopleSlice.actions;

export default peopleSlice.reducer;
