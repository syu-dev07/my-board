import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  title: string;
  top?: number;
  left?: number;
};

const initialState: Todo[] = [
  {
    id: 0,
    title: "aaa",
    top: 100,
    left: 100,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, "id">>) => {
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.payload.title,
          top: action.payload.top ? action.payload.top : 0,
          left: action.payload.left ? action.payload.left : 0,
        },
      ];
    },
    toggleTodo: (state, action: PayloadAction<Todo>) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title ? action.payload.title : todo.title,
            top: action.payload.top ? action.payload.top : todo.top,
            left: action.payload.left ? action.payload.left : todo.left,
          };
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
