import { createStore } from "redux";

const Initial_value = {
  counter: 0,
  privacy: false,
};

const reducerAction = (store = Initial_value, action) => {
  let newStore = store;
  if (action.type === "Increment") {
    newStore = { ...store, counter: store.counter + 1 };
  } else if (action.type === "Decrement") {
    newStore = { ...store, counter: store.counter - 1 };
  } else if (action.type === "Add") {
    newStore = {
      ...store,
      counter: store.counter + Number(action.payload.val),
    };
  } else if (action.type === "Subtract") {
    newStore = {
      ...store,
      counter: store.counter - Number(action.payload.val),
    };
  } else if (action.type === "Privacy_Toggle") {
    newStore = { ...store, privacy: !store.privacy };
  }

  return newStore;
};

const CounterStore = createStore(reducerAction);

export default CounterStore;
