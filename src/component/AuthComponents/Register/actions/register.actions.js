import { registerConstants } from "../constants/actions.constants";
import { registerService } from "../services/register.service";
import { alertActions } from "../../../Alert/actions/alert.actions";
import { message, routeConstants } from "../../../../_constants";
import { history } from "../../../../_utils";

export const registerActions = {
  register,
  reset
};

function register(requestBody) {
  requestBody['gender'] = requestBody.gender.value; 
  return async dispatch => {
    dispatch(request(requestBody));
    try {
      const response = await registerService.register(requestBody);
      response && dispatch(success(response));
      history.push(routeConstants.ACCOUNT);
      dispatch(alertActions.success("User successfully registered"));
      dispatch(reset());
    } catch (error) {
      dispatch(failure(error));
      dispatch(
        alertActions.error(error ? error.message : message.GENERIC_ERROR)
      );
    }
  };

  function request(requestBody) {
    return { type: registerConstants.REGISTER_REQUEST, requestBody };
  }
  function success(response) {
    return { type: registerConstants.REGISTER_SUCCESS, response };
  }
  function failure(error) {
    return { type: registerConstants.REGISTER_FAILURE, error };
  }
}

function reset() {
  return { type: registerConstants.REGISTER_RESET };
}
