import React from "react";
import { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState();
  const [toggle, setToggle] = useState(false);

  const addFunction = () => {
    for (let i = 0; i < todo.length; i++) {
      if (inputValue.toLowerCase() == todo[i].toLowerCase()) {
        alert("todo already exist");
        setInputValue("");
        return;
      }

    }
    if (toggle) {
      const todo2 = [...todo];
      todo2[id] = inputValue;
      setTodo(todo2);
      setToggle(false);
      setInputValue("");
      return;
    }

    setTodo([...todo, inputValue]);
    setInputValue("");
  };

  const deleteFunction = (i) => {
    const filterTodo = todo.filter((x) => x !== i);
    console.log(filterTodo);

    setTodo([...filterTodo]);
  };

  const handleUp = (i) => {

    if (i != 0) {
      const todo2 = [...todo];
      let temp = todo2[i];
      todo2[i] = todo2[i - 1];
      todo2[i - 1] = temp;

      setTodo([...todo2]);
    }
  };

  const handleDown = (i) => {
    if (i != todo.length - 1) {
      const todo2 = [...todo];
      let temp = todo2[i];
      todo2[i] = todo2[i + 1];
      todo2[i + 1] = temp;

      setTodo([...todo2]);
    }
  };

  const editTodo = (i) => {
    setId(i);
    setInputValue(todo[i]);
    setToggle(true);
  };

  return (
    <div>
      <input
        value={inputValue}
        placeholder="add todo"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addFunction} disabled={!inputValue.trim()}>
        {toggle ? "Update" : "Add Todo"}
      </button>

      <div>
        {todo.map((x, i) => (
          <li>
            <h3>
              {x} <button onClick={() => editTodo(i)}>edit</button>
              <button onClick={() => deleteFunction(x)}>delete</button>
              {!!i && <button onClick={() => handleUp(i)}>up</button>}
              {i != todo.length - 1 && (
                <button onClick={() => handleDown(i)}>down</button>
              )}
            </h3>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Home;
