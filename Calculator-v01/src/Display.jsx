import React from "react";
import styles from "./Display.module.css";

const Display = ({dispVal}) => {
  return (
    <>
      <input
        type="text"
        className={styles.innerTop}
        value={dispVal}
        readOnly
      />
    </>
  );
};

export default Display;
