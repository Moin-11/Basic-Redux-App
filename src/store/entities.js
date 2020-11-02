import { combineReducers } from "redux";
import bugsSlice from "./bugs";

import projectsSlice from "./projects";

const entitiesReducer = combineReducers({
  bugs: bugsSlice,
  projects: projectsSlice,
});

export default entitiesReducer;
