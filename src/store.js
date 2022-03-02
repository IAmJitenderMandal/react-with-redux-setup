import { combineReducers, createStore } from "redux";

import app from "./reducer/app";

const rootReducer = combineReducers({
  app,
});

const store = createStore(rootReducer);
export default store;
