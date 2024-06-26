import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchValue: '' };

const watchSlice = createSlice({
  name: 'watch',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

const { actions, reducer: watchReducer } = watchSlice;
export const { setSearchValue } = actions;
export default watchReducer;
