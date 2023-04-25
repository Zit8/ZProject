import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // ojects: objectsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
