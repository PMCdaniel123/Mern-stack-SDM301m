// ref: https://vitejs.dev/guide/env-and-mode.html
export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const ENV = import.meta.env.VITE_ENV;
export const LOGIN = import.meta.env.VITE_LOGIN_ADMIN_API;

// Counter API
export const GET_BRANDS = import.meta.env.VITE_GET_BRANDS_LIST_API;
export const CREATE_BRANDS = import.meta.env.VITE_CREATE_BRANDS_API;
export const UPDATE_BRANDS = import.meta.env.VITE_UPDATE_BRANDS_API;
export const DELETE_BRANDS = import.meta.env.VITE_DELETE_BRANDS_API;
