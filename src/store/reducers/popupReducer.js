import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state[action.payload] = true;
    },
    closePopup: (state, action) => {
      state[action.payload] = false;
    },
  },
});

const { actions, reducer: popupReducer } = popupSlice;
export const { openPopup, closePopup } = actions;
export default popupReducer;
