import { configureStore } from "@reduxjs/toolkit";
import { openLibraryApi } from "../features/search/openLibraryApi.ts";

export const store = configureStore({
  reducer: {
    [openLibraryApi.reducerPath]: openLibraryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(openLibraryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
