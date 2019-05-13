import { registerConstants } from "../constants/actions.constants";

const initialState = {
  submitting: false,
  submitted: false,
  response: null,
  request: null,
  error: null
};

export const register = (state = initialState, action) => {
  switch (action.type) {
    case registerConstants.REGISTER_REQUEST:
      return {
        ...state,
        submitting: true,
        submitted: false,
        request: action.requestBody,
        response: null,
        error: null
      };
    case registerConstants.REGISTER_SUCCESS:
      return {
        ...state,
        submitting: false,
        submitted: true,
        response: action.response,
        error: null
      };
    case registerConstants.REGISTER_FAILURE:
      return {
        ...state,
        submitting: false,
        submitted: false,
        response: null,
        error: action.error
      };
    case registerConstants.REGISTER_RESET:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
