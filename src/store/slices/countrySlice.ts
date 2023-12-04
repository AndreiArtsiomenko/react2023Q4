import { createSlice } from '@reduxjs/toolkit';
import countries from '../../data/countries';

type CountryType = {
  countries: string[];
};

const initialState: CountryType = {
  countries: countries,
};

export const countriesDataSlice = createSlice({
  name: 'countriesData',
  initialState,
  reducers: {},
});

export default countriesDataSlice.reducer;
