import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import Card from "../../UI/card/Card";

import { listActions } from "../../store/list";

import styles from "./NewTodo.module.css";

const NewTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: todo,
      completed: false,
    };
    dispatch(listActions.addTodo(newTodo));
    setTodo("");
  };

  const changeHandler = (event) => {
    setTodo(event.target.value);
  };

  return (
    <Card className={styles["m-50"]}>
      <form onSubmit={submitHandler} className={styles["new-todo"]}>
        <div className={styles.circle}></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={todo}
          onChange={changeHandler}
          required={true}
        />
        <button
          type="submit"
          style={{
            padding: "5px 10px",
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}>
          Create
        </button>
      </form>
    </Card>
  );
};

export default NewTodo;
