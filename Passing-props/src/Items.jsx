import UniqueItem from "./UniqueItem";
import "./App.css";
import { useState } from "react";

function Items({ itemName }) {
  let [activeItems, setActiveItems] = useState([]);

  let OnBuyButton = (index) => {
    let newVal = [...activeItems, index];
    //  setActiveItems([index]);
 if (!activeItems.includes(index)) {
      // If not, add it to the list of active items
      setActiveItems([index]);
    }
  };

  return (
    <ul className="list-group">
      {itemName.map((item, index) => (
        <UniqueItem
          key={index}
          singleItem={item}
          bought={activeItems.includes(index)}
          handleButton={() => OnBuyButton(index)}
        />
      ))}
    </ul>
  );
}
export default Items;
