import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchValue: '', brandNames: [] };

// eslint-disable-next-line react-refresh/only-export-components
const watchSlice = createSlice({
  name: 'watch',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

const { actions, reducer: watchReducer } = watchSlice;
export const { setFilter, setSearchValue } = actions;
export default watchReducer;
