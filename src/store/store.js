import { ENV } from '../constant/environments';
import { configureStore } from '@reduxjs/toolkit';
import memberReducer from './reducers/memberReducer';
import popupReducer from './reducers/popupReducer';
import authReducer from './reducers/authReducer';
import watchReducer from './reducers/watchReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    popup: popupReducer,
    member: memberReducer,
    watch: watchReducer,
  },
  devTools: ENV === 'development',
});

export default store;
