import { ADD, DELETE, UPDATE } from "../action/action-types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      return state.filter((item) => item.id === action.payload);

    case UPDATE:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item }; //TODO: update your value according to your need
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};
