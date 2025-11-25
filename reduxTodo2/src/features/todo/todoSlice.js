import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  inputValue: "",
  index: -1,
  searchInput: "",
  filteredTodos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state) => {
      let obj = { id: nanoid(), text: state.inputValue };
      if (state.index != -1) {
        state.todos[state.index].text = state.inputValue;
        state.index = -1;
        state.inputValue = "";
      } else {
        state.todos.push(obj);
        state.inputValue = "";
      }
    },
    removeTodo: (state, action) => {
      let index = action.payload;
      state.todos = state.todos.filter((x) => x.id != index);
    },
    updateInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    editTask: (state, action) => {
      state.index = action.payload;
      state.inputValue = state.todos[state.index].text;
    },
    handleUp: (state, action) => {
      let temp = state.todos[action.payload];
      state.todos[action.payload] = state.todos[action.payload - 1];
      state.todos[action.payload - 1] = temp;
    },
    handleDown: (state, action) => {
      let temp = state.todos[action.payload];
      state.todos[action.payload] = state.todos[action.payload + 1];
      state.todos[action.payload + 1] = temp;
    },
    todoSearch: (state, action) => {
      state.searchInput = action.payload;
      state.filteredTodos = state.todos.filter((x) =>
        x.text.includes(state.searchInput)
      );
    },
    updateFilteredTodo: (state) => {
      state.filteredTodos = state.todos;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateInputValue,
  editTask,
  handleUp,
  handleDown,
  todoSearch,
  updateFilteredTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
