import { configureStore } from "@reduxjs/toolkit";
import reducer from "../functional/bugs";

const AppStore = () => {
  const store = configureStore({ reducer });
  return store;
};

export default AppStore;
