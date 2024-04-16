import { useState } from "react";
import "./App.css";
import TodoHeading from "./TodoHeading";
import TodoItem from "./TodoItem";
import UniqueItems from "./UniqueItems";
import ErrorMessage from "./ErrorMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const onClickButton = (itemName, itemDate) => {
    let newVal = [...todoItems, { name: itemName, date: itemDate }];
    setTodoItems(newVal);
  };
  const OnDeleteClick = (itemVal, itemKey) => {
    console.log(`item ${itemVal} is deleted with key value ${itemKey}`);
    let deletedItems = todoItems.filter((item, index) => index != itemKey);
    setTodoItems(deletedItems);
  };
  return (
    <center>
      <h1 className="heading">Todo-Lists</h1>
      <TodoHeading handleButton={onClickButton}></TodoHeading>
      <ErrorMessage items={todoItems} />
      <TodoItem items={todoItems} handleDelete={OnDeleteClick} />
    </center>
  );
}
export default App;
