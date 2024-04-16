import { configureStore, createSlice } from "@reduxjs/toolkit";
import Counterslice from "./CounterRedux";
import PrivacySlice from "./PrivacyRedux";

const CounterStore = configureStore({
  reducer: { counter: Counterslice.reducer, privacy: PrivacySlice.reducer },
});

export default CounterStore;
