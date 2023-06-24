import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./slices";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [slice.name]: slice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
