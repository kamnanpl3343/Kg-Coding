import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ items }) => {
  if(items.length==0){return <span className={styles.errMsg}> No items in the todo!! Stay Happy </span>}
};

export default ErrorMessage;
