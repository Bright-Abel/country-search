import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { sliceReducers } from "@/lib/features/sliceFeature";

const appReducers = combineReducers({
  dataSlice: sliceReducers,
});

export const store = configureStore({
  reducer: appReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
