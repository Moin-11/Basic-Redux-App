import { combineReducers } from "redux";

import entitiesReducer from "./entities";

combineReducers({
  entities: entitiesReducer,
});
