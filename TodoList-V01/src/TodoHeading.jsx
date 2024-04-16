import React, { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";

function TodoHeading({ handleButton }) {
  let [todoItm, setTodoItm] = useState("");
  let [todoDate, setTodoDate] = useState("");

  const onItemButton = (event) => {
    //setTodoItm(event.target.value);
    let newTodo = event.target.value;
    if (event.key === "Enter") {
      handleButton(newTodo, todoDate);
      event.target.value = "";
      setTodoItm = "";
    } else {
      setTodoItm(newTodo);
    }

    // event.target.value = "";
  };
  const onDateButton = (event) => {
    setTodoDate(event.target.value);
  };

  const onClickButton = (event) => {
    handleButton(todoItm, todoDate);
    setTodoItm("");
    setTodoDate("");
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter todo here...."
              aria-label="First name"
              onKeyDown={onItemButton}
              //value={todoItm}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              className="form-control"
              onChange={onDateButton}
              value={todoDate}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={onClickButton}
            >
              <MdOutlineAddBox />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TodoHeading;
