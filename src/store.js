import { createStore } from "redux";

const initialState = {
  amount: "19.99",
  currencyCode: "JPY",
};

function reducer(state = initialState, action) {
  return state;
}

export const store = createStore(reducer);
