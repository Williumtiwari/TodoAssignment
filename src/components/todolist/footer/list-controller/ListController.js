import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { statusActions } from "../../../store/list-controller";

import styles from "./ListController.module.css";

const ListController = (props) => {
  const status = useSelector((state) => state.status.status);
  const dispatch = useDispatch();

  const statusHandler = (event) => {
    dispatch(statusActions.setStatus(event.target.innerText));
  };

  return (
    <div
      className={`${styles["list-controllers"]} ${
        styles[`${props.platform}`]
      }`}>
      <div
        className={status === "All" ? styles.active : ""}
        onClick={statusHandler}>
        All
      </div>
      <div
        className={status === "In Progress" ? styles.active : ""}
        onClick={statusHandler}>
        In Progress
      </div>
      <div
        className={status === "Completed" ? styles.active : ""}
        onClick={statusHandler}>
        Completed
      </div>
    </div>
  );
};

export default ListController;
