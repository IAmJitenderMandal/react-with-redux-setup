import { ADD, DELETE, UPDATE } from "./action-types";

export const add = (item) => ({
  type: ADD,
  payload: item,
});

export const delteItem = (id) => ({
  type: DELETE,
  payload: id,
});

export const update = (item) => ({
  type: UPDATE,
  payload: item,
});
