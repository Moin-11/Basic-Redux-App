import { createSlice } from "@reduxjs/toolkit";

const bugSlice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    // maps actions to action-handlers
    AddBug: (bugs, action) => {
      bugs.push({
        id: ++lastID,
        description: action.payload.description,
        resolved: false,
      });
    },
  },

  ResolveBug: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);

    bugs[index] = true;
  },

  RemoveBug: (bugs, action) => {
    return bugs.filter((bug) => bug.id !== action.payload.id);
  },
});

let lastID = 0;
export const { AddBug, RemoveBug, ResolveBug } = bugSlice.actions;
export default bugSlice;
