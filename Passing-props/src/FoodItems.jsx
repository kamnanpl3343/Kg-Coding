import React from "react";
import styles from "./FoodItems.module.css";

const FoodItems = (props) => {
  return (
    <div className={styles.outer}>
      <input
        type="text"
        placeholder="Enter food item here"
        className={styles["food-input"]}
        onKeyDown={props.handleOnKey}
      />
      <p>{props.currentItems}</p>
    </div>
  );
};

export default FoodItems;
