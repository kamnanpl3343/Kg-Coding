import { createSlice } from "@reduxjs/toolkit";

const PrivacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    Privacy_Toggle: (state) => {
      return (state = !state);
    },
  },
});

export default PrivacySlice;

export const PrivacyAction = PrivacySlice.actions;
