import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isError: false,
  error: "",
  data: [],
};

export const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: () => {},
});

export default videoSlice.reducer;
