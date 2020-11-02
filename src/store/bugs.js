import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastID = 0;
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

    ResolveBug: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);

      bugs[index] = true;
    },

    RemoveBug: (bugs, action) => {
      return bugs.filter((bug) => bug.id !== action.payload.id);
    },

    assignBug: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex((bug) => bug.id === bugId);
      bugs[index].userId = userId;
    },
  },
});

export const { AddBug, RemoveBug, ResolveBug, assignBug } = bugSlice.actions;
export default bugSlice.reducer;

// Selector Functions

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getAssignedBugs = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
