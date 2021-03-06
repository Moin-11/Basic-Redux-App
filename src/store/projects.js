import { createSlice } from "@reduxjs/toolkit";

let lastID = 0;
const projectsSlice = createSlice({
  name: "Projects",
  initialState: [],
  reducers: {
    addProject: (projects, action) => {
      projects.push({
        id: ++lastID,
        name: action.payload.name,
      });
    },

    discardProject: (projects, action) => {
      return projects.filter((project) => projects.id !== action.payload.id);
    },

    completeProject: (projects, action) => {
      const index = projects.findIndex(
        (project) => project.id === action.payload.id
      );
      projects[index].completed = true;
    },
  },
});

export const {
  addProject,
  completeProject,
  discardProject,
} = projectsSlice.actions;
export default projectsSlice.reducer;
