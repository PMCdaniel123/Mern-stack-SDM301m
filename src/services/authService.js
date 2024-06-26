import { LOGIN, REGISTER } from '@/constant/environments';
import axiosInstance from '@/utils/axiosInstance';

export const authService = {
  login(payload = {}) {
    return axiosInstance.post(LOGIN, payload);
  },
  register(payload = {}) {
    return axiosInstance.post(REGISTER, payload);
  },
  getProfile() {
    return axiosInstance.get(`/members/profile`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  },
};
