/*
  1.  Add new task -- done
	2.	Edit task -- done
	3.	Delete task --- done
	4.	Mark task as completed / uncompleted--done
	5.	Filter tasks dropdown -  / Completed--done
	6.	Clear all completed tasks
	7.	Task counter (e.g., “3 tasks left”)--Done
	8.	Save tasks in localStorage--done
	9.	Responsive design (mobile-friendly)--done
  10. Search bar to find tasks--done
  11. Sub-tasks (nested todos)--
  12. Dark / light mode toggle
	13. Confirm dialog before delete
	14. Toast messages for actions (added, deleted, etc.)
	15. Auto-save feature (only when typing in edit mode)
  16. Keyboard shortcuts (Enter to add, Esc to cancel)
*/

import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateInputValue,
  addTodo,
  removeTodo,
  editTask,
  handleUp,
  handleDown,
} from "./features/todo/todoSlice";

function App() {
  const selector = useSelector((state) => state.inputValue);
  const todos = useSelector((state) => state.todos);
  const index = useSelector((state) => state.index);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Hello from redux toolkit</h1>
      </div>
      <div>
        <input
          type="text"
          value={selector}
          placeholder="add todo"
          onChange={(e) => dispatch(updateInputValue(e.target.value))}
        />
        <button onClick={() => dispatch(addTodo())}>{index != -1? "Update":"Add todo"}</button>
      </div>

      <div>
        {todos.map((data, i) => (
          <li key={i}>
            {data.text}
            <button onClick={() => dispatch(removeTodo(data.id))}>
              Delete
            </button>
            <button onClick={() => dispatch(editTask(i))}>Edit</button>
            {i > 0 && <button onClick={() => dispatch(handleUp(i))}>Up</button>}
            {i < todos.length - 1 && (
              <button onClick={() => dispatch(handleDown(i))}>Down</button>
            )}
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
