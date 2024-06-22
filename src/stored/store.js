import { ENV } from "../constant/environments"
import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./reducers/memberReducer";
import popupReducer from "./reducers/popupReducer";

const store = configureStore({
  reducer: {
    // auth: authReducer,
    popup: popupReducer,
    member: memberReducer,
  },
  devTools: ENV === "development",
});

export default store;
