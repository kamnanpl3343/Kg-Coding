import React, { useContext, useRef, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { TodoItemsContext } from "./store/todoStore";

function TodoHeading() {
  const { addNewItem } = useContext(TodoItemsContext);
  let todoItmRef = useRef();
  let todoDateRef = useRef();

  const onClickButton = (event) => {
    event.preventDefault();
    const todoItm = todoItmRef.current.value;
    const todoDate = todoDateRef.current.value;
    todoItmRef.current.value = "";
    todoDateRef.current.value = "";

    addNewItem(todoItm, todoDate);
  };
  return (
    <React.Fragment>
      <div className="container">
        <form className="row" onSubmit={onClickButton}>
          <div className="col-6">
            <input
              type="text"
              ref={todoItmRef}
              className="form-control"
              placeholder="Enter todo here...."
            />
          </div>
          <div className="col-4">
            <input type="date" className="form-control" ref={todoDateRef} />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success">
              <MdOutlineAddBox />
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default TodoHeading;
