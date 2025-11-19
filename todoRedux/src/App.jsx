import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateInputValue,
  addTodo,
  removeTodo,
  handleUp,
  handleDown,
  editTodo,
} from "./features/todo/todoSlice";
function App() {
  const todoList = useSelector((state) => state.todos);

  const inputValue = useSelector((state) => state.inputValue);
  const toggle = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Hello from RTK</h1>
      <div>
        <input
          placeholder="add todo"
          value={inputValue}
          onChange={(e) => dispatch(updateInputValue(e.target.value))}
        />
        <button
          onClick={() => dispatch(addTodo())}
          disabled={!inputValue.trim()}
        >
          {toggle ? "Update" : "Add Todo"}
        </button>
      </div>
      <div>
        {todoList.map((x, i) => (
          <h3>
            {x.text}
            <button onClick={() => dispatch(removeTodo(i))}>delete</button>
            <button onClick={() => dispatch(editTodo(i))}>edit</button>
            {!!i && <button onClick={() => dispatch(handleUp(i))}>Up</button>}
            {i != todoList.length - 1 && (
              <button onClick={() => dispatch(handleDown(i))}>Down</button>
            )}
          </h3>
        ))}
      </div>
    </>
  );
}

export default App;
