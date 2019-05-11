import { apiCall } from "../../../../_utils";
import { registerEndpoint } from "../../../../_constants";

export const registerService = {
  register
};

function register(request) {
  const method = "POST";
  return apiCall(method, registerEndpoint, request);
}
