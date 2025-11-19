import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo());
    setInput("");
  }
  return (
    <from onSubmit={addTodoHandler}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </from>
  );
}

export default AddTodo;
