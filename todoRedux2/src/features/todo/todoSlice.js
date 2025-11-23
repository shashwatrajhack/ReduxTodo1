/*
  1.  Add new task -- done
	2.	Edit task -- done
	3.	Delete task --- done
	4.	Mark task as completed / uncompleted
	5.	Filter tasks dropdown -  / Completed
	6.	Clear all completed tasks
	7.	Task counter (e.g., “3 tasks left”)
	8.	Save tasks in localStorage
	9.	Responsive design (mobile-friendly)
  10. Search bar to find tasks
  11. Sub-tasks (nested todos)
  12. Dark / light mode toggle
	13. Confirm dialog before delete
	14. Toast messages for actions (added, deleted, etc.)
	15. Auto-save feature (only when typing in edit mode)
  16. Keyboard shortcuts (Enter to add, Esc to cancel)
*/

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: localStorage.getItem("todoData")
    ? JSON.parse(localStorage.getItem("todoData"))
    : [],
  filteredTodo: [],
  inputValue: "",
  searchInput: "",
  id: -1,
  selectDropDown: "all",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state) => {
      let existingValue = state.todos.find(
        (value) => state.inputValue.toLowerCase() == value.text.toLowerCase()
      );

      if (existingValue) {
        return alert("already exist");
      }

      if (state.id != -1) {
        // for (let i = 0; i < state.todos.length; i++) {
        //   if (state.id == state.todos[i].ids) {
        //     state.todos[i].text = state.inputValue;
        //   }
        // }
        let foundIndex = state.todos.findIndex((val) => val.ids === state.id);
        if (foundIndex !== -1) {
          state.todos[foundIndex].text = state.inputValue;
        }
        state.id = -1;
        state.inputValue = "";
        return;
      }
      let obj = { ids: nanoid(), text: state.inputValue, status: false };
      state.todos.push(obj);
      state.inputValue = "";
    },
    removeTodo: (state, action) => {
      let index = action.payload;
      state.todos = state.todos.filter((data) => data.ids !== index);
    },
    editTodo: (state, action) => {
      state.id = action.payload;
      state.inputValue = state.todos.find((i) => i.ids == state.id).text;
      console.log(state.todos.find((x) => x.ids == state.id).text);
    },
    updateInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    updateFilteredTodo: (state) => {
      state.filteredTodo = state.todos;
    },
    searchInputFunction: (state, action) => {
      state.searchInput = action.payload;
      state.filteredTodo = state.todos.filter((x) =>
        x.text.toLowerCase().includes(state.searchInput.toLowerCase())
      );
    },
    markDone: (state, action) => {
      let foundIndex = state.todos.findIndex(
        (val) => val.ids === action.payload
      );
      if (foundIndex !== -1) {
        state.todos[foundIndex].status = !state.todos[foundIndex].status;
      }
      console.log(state.status);
    },
    dropDown: (state, action) => {
      state.selectDropDown = action.payload;
      console.log(state.selectDropDown);
      if (state.selectDropDown == "true") {
        state.filteredTodo = state.todos.filter((x) => x.status == true);
      } else if (state.selectDropDown == "false") {
        state.filteredTodo = state.todos.filter((x) => x.status == false);
      } else {
        state.filteredTodo = state.todos;
      }
    },
    clearTodo: (state) => {
      state.filteredTodo = state.todos.filter((x) => x.status != true);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateInputValue,
  editTodo,
  updateFilteredTodo,
  searchInputFunction,
  markDone,
  dropDown,
  clearTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
