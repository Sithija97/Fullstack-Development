import { ActionTypes } from "../constants/action-types";

const initailState = {
  products: [],
};

export const productReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
