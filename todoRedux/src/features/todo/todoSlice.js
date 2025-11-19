import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
  inputValue: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state) => {
      const todo = {
        id: nanoid(),
        text: state.inputValue,
      };
      state.todos.push(todo);
      state.inputValue = "";
      return state;
    },
    updateInputValue: (state, action) => {
      state.inputValue = action.payload;
      return state;
    },
    removeTodo: (state, action) => {
    //   state.todos.splice(action.payload,1);

    //   return state;

      state.todos = state.todos.filter((todo,i) => {
        return i !== action.payload;
      });
    },
  },
});

export const { addTodo, removeTodo, updateInputValue } = todoSlice.actions;

export default todoSlice.reducer;
