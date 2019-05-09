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
      if (user && user.access_token) {
        authService.setToken(user.access_token);
      }
      const userDetails = authService.getUserDetails(user);
      dispatch(success(userDetails));
      dispatch(reset());
    } catch (error) {
      dispatch(failure(error));
      dispatch(alertActions.error("Username or password incorrect"));
    }
  };

  function request() {
    return { type: authConstants.LOGIN_REQUEST };
  }
  function success(userDetails) {
    history.push("/app");
    return { type: authConstants.LOGIN_SUCCESS, userDetails };
  }
  function failure(error) {
    return { type: authConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  authService.logout();
  return { type: authConstants.LOGOUT };
}

function reset() {
  return { type: authConstants.LOGIN_RESET };
}
