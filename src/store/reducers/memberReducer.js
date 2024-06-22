import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchValue: '' };

// eslint-disable-next-line react-refresh/only-export-components
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
