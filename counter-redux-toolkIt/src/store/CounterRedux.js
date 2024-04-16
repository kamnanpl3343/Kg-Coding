import { createSlice } from "@reduxjs/toolkit";

const Counterslice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    Increment: (state) => {
      state.counterVal++;
    },
    Decrement: (state) => {
      state.counterVal--;
    },
    Add: (state, action) => {
      state.counterVal += Number(action.payload.val);
    },
    Subtract: (state, action) => {
      state.counterVal -= Number(action.payload.val);
    },
  },
});

export default Counterslice;
export const CounterAction = Counterslice.actions;
