import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { CounterAction } from "../store/CounterRedux";
import { PrivacyAction } from "../store/PrivacyRedux";

const Button = () => {
  const inputElem = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(CounterAction.Increment());
  };
  const handleDecrement = () => {
    dispatch(CounterAction.Decrement());
  };
  const handleAdd = () => {
    dispatch(CounterAction.Add({ val: inputElem.current.value }));

    inputElem.current.value = "";
  };
  const handleSubtract = () => {
    dispatch(CounterAction.Subtract({ val: inputElem.current.value }));
    inputElem.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch(PrivacyAction.Privacy_Toggle());
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center m-3">
        <input
          type="text"
          placeholder="Enter ur text"
          ref={inputElem}
          style={{ width: "100px" }}
        />
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Button;
