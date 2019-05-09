import jwt_decode from "jwt-decode";
import { apiCall } from "../../../../_utils";
import { authEndpoint } from "../../../../_constants";

const authLocalStorageKey = "id_token";

const setToken = idToken => {
  localStorage.setItem(authLocalStorageKey, idToken);
};

const getToken = () => {
  return localStorage.getItem(authLocalStorageKey);
};

const logout = () => {
  localStorage.removeItem(authLocalStorageKey);
};

const tokenIsExpired = token => {
  try {
    const decodedToken = token ? jwt_decode(token) : null;
    return new Date(0).setUTCSeconds(decodedToken.exp) < new Date();
  } catch (e) {
    console.error(e);
    return true;
  }
};

const loggedIn = () => {
  const token = getToken();
  if (token && !tokenIsExpired(token)) {
    return true;
  }
  return false;
};

const getUserDetails = token => {
  if (token && loggedIn()) {
    let decodedToken = jwt_decode(token);
    return decodedToken
      ? {
          first_name: decodedToken.first_name ? decodedToken.first_name : "",
          last_name: decodedToken.last_name ? decodedToken.last_name : "",
          user_name: decodedToken.last_name ? decodedToken.user_name : ""
        }
      : null;
  }
  return null;
};

const getCustomerId = () => {
  const token = getToken();
  const userDetails = getUserDetails(token);
  if (userDetails) {
    return userDetails.user_name;
  }

  return null;
};

function login(requestBody) {
  const method = "POST";
  return apiCall(method, authEndpoint, requestBody);
}

export const authService = {
  login,
  logout,
  loggedIn,
  getToken,
  setToken,
  getCustomerId,
  getUserDetails,
  tokenIsExpired
};
