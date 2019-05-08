import { resetPasswordConstants } from "../constants/actions.constants";

const initialState = {
  submitting: false,
  submitted: false,
  response: null,
  request: null,
  error: null
};

export const resetPassword = (state = initialState, action) => {
  switch (action.type) {
    case resetPasswordConstants.UPDATEPASSWORD_REQUEST:
      return {
        ...state,
        submitting: true,
        submitted: false,
        request: action.requestBody,
        response: null,
        error: null
      };
    case resetPasswordConstants.UPDATEPASSWORD_SUCCESS:
      return {
        ...state,
        submitting: false,
        submitted: true,
        response: action.response,
        error: null
      };
    case resetPasswordConstants.UPDATEPASSWORD_FAILURE:
      return {
        ...state,
        submitting: false,
        submitted: false,
        response: null,
        error: action.error
      };
    default:
      return state;
  }
};
