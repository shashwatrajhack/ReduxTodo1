import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  inputValue: "",
  toggle: false,
  index: -1,
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

      if (state.toggle) {
        state.todos[state.index] = state.inputValue;
        state.inputValue = "";
        state.toggle = false;
        return state;
      }
      let found = state.todos.find(
        (x) => state.inputValue.toLowerCase() == x.text.toLowerCase()
      );
      if (found) return alert("todo already exist");

      state.todos.push(todo);

      state.inputValue = "";
      state.toggle = false;
      return state;
    },
    updateInputValue: (state, action) => {
      state.inputValue = action.payload;

      return state;
    },
    removeTodo: (state, action) => {
      //   state.todos.splice(action.payload,1);
      //   return state;

      state.todos = state.todos.filter((todo, i) => {
        return i !== action.payload;
      });
    },
    handleUp: (state, action) => {
      let i = action.payload;

      let temp = state.todos[i];
      state.todos[i] = state.todos[i - 1];
      state.todos[i - 1] = temp;
      return state;
    },
    handleDown: (state, action) => {
      let i = action.payload;

      let temp = state.todos[i];
      state.todos[i] = state.todos[i + 1];
      state.todos[i + 1] = temp;
      return state;
    },
    editTodo: (state, action) => {
      state.index = action.payload;
      state.inputValue = state.todos[state.index].text;
      state.toggle = true;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateInputValue,
  handleUp,
  handleDown,
  editTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
