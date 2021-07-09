const initialState = {
  name: "Andrew Gilliland",
  loggedIn: false,
};

export function userReducer(state = initialState, action) {
  return state;
}

// selectors
export const getName = (state) => state.user.name;
export const getFirstName = (state) => {
  return state.user.name.split(" ")[0];
};
