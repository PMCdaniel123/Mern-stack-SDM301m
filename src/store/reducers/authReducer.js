import { authService } from '@/services/authService';
import tokenMethod from '@/utils/token';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

const initialState = {
  profile: null,
  loading: {
    login: false,
    getProfile: false,
  },
  token: tokenMethod.get()?.accessToken || null,
  role: false,
};

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    handleLogout: (state) => {
      tokenMethod.remove();
      state.profile = null;
      message.success('Đăng xuất thành công');
      state.token = null;
      state.role = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.loading.login = false;
        state.token = action.payload.token;
        state.role = action.payload.role;
      })
      .addCase(handleLogin.pending, (state) => {
        state.loading.login = true;
      })
      .addCase(handleLogin.rejected, (state) => {
        state.loading.login = false;
      })

      .addCase(handleGetProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading.getProfile = false;
      })
      .addCase(handleGetProfile.pending, (state) => {
        state.loading.getProfile = true;
      })
      .addCase(handleGetProfile.rejected, (state) => {
        state.loading.getProfile = false;
      });
  },
});

// Extract the action creators object and the reducer
const { actions, reducer: authReducer } = authSlice;
// Extract and export each action creator by name
export const { handleLogout, handleShowModal, handleCloseModal } = actions;
// Export the reducer, either as a default or named export
export default authReducer;

export const handleLogin = createAsyncThunk(
  'auth/handleLogin',
  async (payload, thunkApi) => {
    try {
      const loginRes = await authService.login(payload);
      console.log(loginRes);
      const { token: accessToken, refreshToken, admin: role } = loginRes || {};
      tokenMethod.set({
        accessToken,
        refreshToken,
        role,
      });
      // thunkApi.dispatch(handleGetProfile());
      message.success('Đăng nhập thành công');
      return { role, token: accessToken };
    } catch (error) {
      const errorInfo = error?.response?.data;
      if (errorInfo.message === 'Not Found') {
        message.error('Username hoặc password không đúng');
      }
      return thunkApi.rejectWithValue(errorInfo);
    }
  },
);

export const handleGetProfile = createAsyncThunk(
  'auth/getProfile',
  async (_, thunkApi) => {
    if (tokenMethod.get()) {
      try {
        const profileRes = await authService.getProfile();
        return profileRes;
      } catch (error) {
        return thunkApi.rejectWithValue(error?.response?.data);
      }
    }
  },
);
