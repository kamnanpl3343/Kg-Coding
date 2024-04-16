import React, { useContext } from "react";
import styles from "./ErrorMessage.module.css";
import { TodoItemsContext } from "./store/todoStore";

const ErrorMessage = () => {
  const todoItemFromContext = useContext(TodoItemsContext);
  const items = todoItemFromContext.todoItems;
  if (items.length == 0) {
    return (
      <span className={styles.errMsg}> No items in the todo!! Stay Happy </span>
    );
  }
};

export default ErrorMessage;
