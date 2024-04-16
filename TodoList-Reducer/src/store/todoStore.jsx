import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  handleDelete: () => {},
});

const todoReducer = (currVal, action) => {
  let newTodoItems = currVal;
  if (action.type === "Add_Item") {
    newTodoItems = [
      ...currVal,
      { name: action.payload.itemName, date: action.payload.itemDate },
    ];
  } else if (action.type === "Delete_Item") {
    newTodoItems = currVal.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchItems] = useReducer(todoReducer, []);

  const addNewItem = (itemName, itemDate) => {
    const addDispatch = {
      type: "Add_Item",
      payload: { itemName, itemDate },
    };
    dispatchItems(addDispatch);
  };

  const deleteNewItem = (itemVal) => {
    const deleteDispatch = {
      type: "Delete_Item",
      payload: { itemName: itemVal },
    };
    dispatchItems(deleteDispatch);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem,
        handleDelete: deleteNewItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
