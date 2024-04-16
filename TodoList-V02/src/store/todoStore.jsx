import { createContext, useContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  handleDelete: () => {},
});
