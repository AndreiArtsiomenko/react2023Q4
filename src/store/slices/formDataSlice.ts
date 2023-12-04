import { createSlice } from '@reduxjs/toolkit';
import formDataType from '../../types/type';

const initialState: formDataType[] = [];

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
