import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Daniel Muhiya" },
  { id: "1", name: "David Muhiya" },
  { id: "2", name: "Delices Muhiya" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
