import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { updateInputValue, addTodo } from "./features/todo/todoSlice";

function App() {
  const selector = useSelector((state) => state.inputValue);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  return (
    <>
      <h1>Welcome to Todo From RTK</h1>
      <div>
        <input
          type="text"
          placeholder="addTodo"
          value={selector}
          onChange={(e) => dispatch(updateInputValue(e.target.value))}
        />
        <button onClick={() => dispatch(addTodo())}>Add</button>
      </div>
      <div>
        {todos.map((x) => {
          return <li>{x}</li>;
        })}
      </div>
    </>
  );
}

export default App;
