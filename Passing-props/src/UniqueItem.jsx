import React from "react";
import "./App.css";
import styles from "./UniqueItem.module.css";

const UniqueItem = (props) => {
  /*const handleButton = (e) => {
    console.log(e);
    console.log(`${props.singleItem} is bought`);
  };*/
  return (
    <>
      <li
        className={`${styles["itm"]} list-group-item ${
          props.bought ? "active" : null
        }`}
      >
        {props.singleItem}
        <button
          type="button"
          className={`${styles["button"]} btn btn-info`}
          // onClick={handleButton} both are correct
          //  onClick={() => handleButton(props.singleItem)}
          onClick={props.handleButton}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default UniqueItem;
