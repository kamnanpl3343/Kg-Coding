import { useReducer, useState } from "react";
import "./App.css";
import TodoHeading from "./TodoHeading";
import TodoItem from "./TodoItem";
import ErrorMessage from "./ErrorMessage";
import TodoItemsContextProvider from "./store/todoStore";

function App() {
  return (
    <TodoItemsContextProvider>
      <center>
        <h1 className="heading">Todo-Lists</h1>
        <TodoHeading></TodoHeading>
        <ErrorMessage />
        <TodoItem />
      </center>
    </TodoItemsContextProvider>
  );
}
export default App;
