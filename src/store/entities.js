import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import usersReducer from "./users";
import projectsReducer from "./projects";

const entitiesReducer = combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: usersReducer,
});

export default entitiesReducer;
