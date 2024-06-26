// ref: https://vitejs.dev/guide/env-and-mode.html
export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const ENV = import.meta.env.VITE_ENV;
export const LOGIN = import.meta.env.VITE_LOGIN_API;
export const REGISTER = import.meta.env.VITE_REGISTER_API;

// Counter API
export const GET_BRANDS = import.meta.env.VITE_GET_BRANDS_LIST_API;
export const CREATE_BRANDS = import.meta.env.VITE_CREATE_BRANDS_API;
export const UPDATE_BRANDS = import.meta.env.VITE_UPDATE_BRANDS_API;
export const DELETE_BRANDS = import.meta.env.VITE_DELETE_BRANDS_API;

// Account API
export const GET_MEMBERS = import.meta.env.VITE_GET_MEMBERS_LIST_API;
export const GET_MEMBER_INFO = import.meta.env.VITE_GET_MEMBER_INFO_API;
export const UPDATE_PROFILE = import.meta.env.VITE_UPDATE_PROFILE_API;
export const UPDATE_PASSWORD = import.meta.env.VITE_UPDATE_PASSWORD_API;

// Watch API
export const GET_WATCHES = import.meta.env.VITE_GET_WATCHES_LIST_API;
export const GET_WATCHES_BY_ID = import.meta.env.VITE_GET_WATCHES_BY_ID_API;
export const CREATE_WATCHES = import.meta.env.VITE_CREATE_WATCHES_API;
export const UPDATE_WATCHES = import.meta.env.VITE_UPDATE_WATCHES_API;
export const DELETE_WATCHES = import.meta.env.VITE_DELETE_WATCHES_API;
export const ADD_COMMENT = import.meta.env.VITE_ADD_COMMENT_API;
