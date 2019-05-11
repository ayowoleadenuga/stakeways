import { authConstants } from "../constants/actions.constants";
import { authService } from "../services/auth.service";
import { alertActions } from "../../../Alert/actions/alert.actions";
import { history } from "../../../../_utils";

export const authActions = {
  login,
  logout
};

function login(requestBody) {
  return async dispatch => {
    dispatch(request());
    try {
      const user = await authService.login(requestBody);
      if (user && user.result) {
        authService.setToken(user.result.accessToken);
      }
      // const userDetails = authService.getUserDetails(user);
      dispatch(success(user));
    } catch (error) {
      dispatch(failure(error));
      dispatch(alertActions.error(error.details || error.message));
    }
  };

  function request() {
    return { type: authConstants.LOGIN_REQUEST };
  }
  function success(user) {
    history.push("/app");
    return { type: authConstants.LOGIN_SUCCESS, response: user };
  }
  function failure(error) {
    return { type: authConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  authService.logout();
  return { type: authConstants.LOGOUT };
}
