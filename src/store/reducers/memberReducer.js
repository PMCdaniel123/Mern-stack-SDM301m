import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchValue: '' };

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

const { actions, reducer: memberReducer } = memberSlice;
export const { setSearchValue } = actions;
export default memberReducer;
