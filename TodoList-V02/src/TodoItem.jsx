import React, { useContext } from "react";
import UniqueItems from "./UniqueItems";
import { TodoItemsContext } from "./store/todoStore";

const TodoItem = (props) => {
const {todoItems}= useContext(TodoItemsContext)
  return (
    <>
      <div className="container text-left ">
        {todoItems.map((item1, index) => (
          <UniqueItems
            key={index}
            keyValue={index}
            todoName={item1.name}
            todoDate={item1.date}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItem;
