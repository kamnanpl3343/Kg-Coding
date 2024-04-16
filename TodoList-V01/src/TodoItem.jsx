import React from "react";
import UniqueItems from "./UniqueItems";

const TodoItem = (props) => {
  let { items } = props;
  return (
    <>
      <div className="container text-left ">
        {items.map((item1, index) => (
          <UniqueItems
            key={index}
            keyValue={index}
            todoName={item1.name}
            todoDate={item1.date}
            handleDelete={props.handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItem;
