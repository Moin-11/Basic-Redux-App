import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import {
  AddBug,
  ResolveBug,
  getUnresolvedBugs,
  assignBug,
  getAssignedBugs,
} from "./store/bugs";
import { addProject } from "./store/projects";
import { addUser } from "./store/users";
import configureStore from "./store/configureStore";
import { get } from "http";

const store = configureStore();

ReactDOM.render(<App />, document.querySelector("#root"));

store.subscribe(() => {
  console.log("Store Changed");
});

store.dispatch(addProject({ name: "project alpha" }));
store.dispatch(AddBug({ description: "bug 1" }));
store.dispatch(AddBug({ description: "bug 2" }));
store.dispatch(AddBug({ description: "bug 3" }));

store.dispatch(ResolveBug({ id: 1 }));

store.dispatch(addUser({ name: "John Henry Mccain Simpson" }));
store.dispatch(assignBug({ bugId: 2, userId: 1 }));

const unresolvedBugs = getUnresolvedBugs(store.getState());
console.log(unresolvedBugs);

const getBugsByUser = getAssignedBugs(1)(store.getState());
console.log(getBugsByUser);
