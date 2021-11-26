export const initialState = {
  user: null,
};
//these are the starting states

export const actionTypes = {
  SET_USER: "SET_USER",
};
//these are the action types

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
