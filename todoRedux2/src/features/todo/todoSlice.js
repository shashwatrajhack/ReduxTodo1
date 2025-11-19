/*
    1.  Add new task
	2.	Edit task
	3.	Delete task
	4.	Mark task as completed / uncompleted
	5.	Filter tasks → All / Active / Completed
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
  todos: [],
  inputValue: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state) => {
      state.todos.push(state.inputValue);
      id: nanoid, (state.inputValue = "");
    },
    removeTodo: (state, action) => {},
    updateInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateInputValue } = todoSlice.actions;

export default todoSlice.reducer;
