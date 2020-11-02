import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const AppStore = () => {
  const store = configureStore({ reducer });
  return store;
};

export default AppStore;
