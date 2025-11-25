import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateInputValue,
  addTodo,
  removeTodo,
  editTodo,
  updateFilteredTodo,
  searchInputFunction,
  markDone,
  dropDown,
  clearTodo,
} from "./features/todo/todoSlice";
import { useEffect } from "react";

function App() {
  //const [filter, setFilter] = useState("");
  const selector = useSelector((state) => state.inputValue);
  const todos = useSelector((state) => state.todos);
  const filteredTodo = useSelector((state) => state.filteredTodo);
  const selectDropDown = useSelector((state) => state.selectDropDown);
  const id = useSelector((state) => state.id);
  const searchTodo = useSelector((state) => state.searchInput);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todos));
    dispatch(updateFilteredTodo());
  }, [todos,dispatch]);

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
        <button onClick={() => dispatch(addTodo())}>
          {id != -1 ? "update" : "Add"}
        </button>
      </div>
      <div>
        <input
          placeholder="search todo"
          value={searchTodo}
          onChange={(e) => dispatch(searchInputFunction(e.target.value))}
        />

        <select
          value={selectDropDown}
          onChange={(e) => dispatch(dropDown(e.target.value))}
        >
          <option value="all">All</option>
          <option value="true">Completed</option>
          <option value="false">Incomplete</option>
        </select>
        <button onClick={() => dispatch(clearTodo())}>Clear All</button>
      </div>
      <div>
        {filteredTodo.map((x, i) => {
          return (
            <li key={i}>
              <span className={x.status ? "text-decoration-message" : ""}>
                {x.text}
              </span>

              <button
                onClick={() => dispatch(removeTodo(x.ids))}
                disabled={x.status}
                className={x.status ? "text-decoration-message" : ""}
              >
                delete
              </button>
              <button
                onClick={() => dispatch(editTodo(x.ids))}
                disabled={x.status}
                className={x.status ? "text-decoration-message" : ""}
              >
                edit
              </button>

              <button onClick={() => dispatch(markDone(x.ids))}>
                mark as done
              </button>
            </li>
          );
        })}
      </div>
      <h3>Total number of task : {todos.length}</h3>
    </>
  );
}

export default App;
