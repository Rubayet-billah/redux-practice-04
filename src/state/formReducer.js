import { actionTypes } from "./actionType";

export const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  term: false,
};

export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.TERMS:
      return {
        ...state,
        term: !state.term,
      };

    default:
      return state;
  }
};
