import { configureStore } from "@reduxjs/toolkit";
// import accountReducer from "../slices/accountSlice";
// import loaderReducer from "../slices/loaderSlice";
import counterReducer from "./slice/counterSlice";
export const store = configureStore({
  reducer: {
    // accounts: accountReducer,
    // loader: loaderReducer,
    counter: counterReducer,
  },
});
