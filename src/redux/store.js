import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./slice/loaderSlice";
import counterReducer from "./slice/counterSlice";
export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    counter: counterReducer,
  },
});
