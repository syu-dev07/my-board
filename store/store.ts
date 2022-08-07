import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../state/todo";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
