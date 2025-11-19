import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateInputValue,
  addTodo,
  removeTodo,
} from "./features/todo/todoSlice";
function App() {
  const todoList = useSelector((state) => state.todos);

  const inputValue = useSelector((state) => state.inputValue);
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
        <button onClick={() => dispatch(addTodo())}>Add Todo</button>
      </div>
      <div>
        {todoList.map((x,i) => (
          <h3>
            {x.text}
            <button onClick={() => dispatch(removeTodo(i))}>delete</button>
          </h3>
        ))}
      </div>
    </>
  );
}

export default App;
