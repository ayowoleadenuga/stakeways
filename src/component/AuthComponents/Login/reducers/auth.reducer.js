import { authConstants } from "../constants/actions.constants";

const initialState = {
  submitting: false,
  submitted: false,
  response: null,
  request: null,
  error: null
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        submitting: true,
        submitted: false,
        request: action.requestBody,
        response: null,
        error: null
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        submitting: false,
        submitted: true,
        response: action.response,
        error: null
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        submitting: false,
        submitted: false,
        response: null,
        error: action.error
      };
    case authConstants.LOGOUT:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
