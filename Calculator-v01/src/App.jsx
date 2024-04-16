import Items from "./Items";
import styles from "./App.module.css";
import { useState } from "react";
import Display from "./Display";

function App() {
  const keywords = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  let [calVal, setCalVal] = useState([]);

  let handleButton = (itemVal) => {
    if (itemVal === "C") {
      setCalVal("");
    } else if (itemVal === "=") {
      let newVal = eval(calVal);
      setCalVal(newVal);
    } else {
      const result = calVal + itemVal;
      setCalVal(result);
    }
  };
  return (
    <>
      <div className={styles.outer}>
        <Display dispVal={calVal} />
        <Items itemName={keywords} onButtonClick={handleButton} />
      </div>
    </>
  );
}

export default App;
