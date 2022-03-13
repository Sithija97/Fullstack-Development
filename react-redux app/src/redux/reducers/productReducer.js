import { ActionTypes } from "../constants/action-types";

const initailState = {
  products: [
    {
      id: 1,
      title: "Sithija",
      category: "Coding",
    },
  ],
};

export const productReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
