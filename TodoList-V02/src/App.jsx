import { useState } from "react";
import "./App.css";
import TodoHeading from "./TodoHeading";
import TodoItem from "./TodoItem";
import UniqueItems from "./UniqueItems";
import ErrorMessage from "./ErrorMessage";
import { TodoItemsContext } from "./store/todoStore";
//import {TodoItemStore} from "./store/todoStore"

function App() {
  const [todoItems, setTodoItems] = useState([]);

  /* const onClickButton = (itemName, itemDate) => {
    setTodoItems((currVal) => {
      const newVal = [...currVal, { name: itemName, date: itemDate }];

      return newVal;
    });
  };*/

  const addNewItem = (itemName, itemDate) => {
    setTodoItems((currVal) => [...currVal, { name: itemName, date: itemDate }]);
  };

  const deleteNewItem = (itemVal, itemKey) => {
    console.log(`item ${itemVal} is deleted with key value ${itemKey}`);
    let deletedItems = todoItems.filter((item, index) => index != itemKey);
    setTodoItems(deletedItems);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem, //if the name of the obj we pass is same as prop name then we can write it for a single time
        handleDelete: deleteNewItem
      }}
    >
      <center>
        <h1 className="heading">Todo-Lists</h1>
        <TodoHeading ></TodoHeading>
        <ErrorMessage/>
        <TodoItem />
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
