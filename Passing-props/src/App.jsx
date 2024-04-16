import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Items from "./Items";
import Message from "./Message";
import Container from "./Container";
import FoodItems from "./FoodItems";
import { useState } from "react";

function App() {
  let [vegFood, setVegFood] = useState([]);
  let [currentItems, setCurrentItems] = useState([]);

  const OnKeyDown = (event) => {
    console.log(event.target.value);
    //console.log(event);

    setCurrentItems(event.target.value);
    if (event.key === "Enter") {
      let newFood = event.target.value;
      setCurrentItems("");
      event.target.value = "";
      setVegFood([...vegFood, newFood]);
    }
  };
  //let Veg = [];

  return (
    <Container>
      <h1>Vegetables List</h1>
      <FoodItems handleOnKey={OnKeyDown} currentItems={currentItems} />

      <Items itemName={vegFood} />
      <Message itemName={vegFood} />
    </Container>
  );
}

export default App;
