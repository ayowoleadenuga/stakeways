//import { message } from "../_constants";

let xsrfToken;
let xsrfTokenHeader;

if (process.env.NODE_ENV === "development") {
  xsrfTokenHeader = "X-XSRF-TOKEN";
  xsrfToken = "75186e5b-4f46-45c7-ac7c-eb0a65b19309";

} else {
  xsrfToken = document.getElementById("csrf-token")
    ? document.getElementById("csrf-token").getAttribute("content")
    : "";
  xsrfTokenHeader = document.getElementById("csrf-token")
    ? document.getElementById("csrf-header").getAttribute("content")
    : "";
}

const createUrlParams = params => {
  console.log("id>>>",params);
  const esc = encodeURIComponent;
  const query = Object.keys(params)
    .map(k => esc(k) + "=" + esc(params[k]))
    .join("&");

  return query;
};

export const basicHeader = {
  "Content-Type": "application/json",
  "Accept": "application/json"
};

export const handleResponse = response => {
  if (response.ok && response.status === 200) {
    return response.json();
  } else if (response.ok && response.status === 201) {
    return response.text();
  }

  return response.json().then(json => {
    const error = new Error(
      json.message ||
        json.Message ||
        json.responseMessage ||
        json.error 
       // message.GENERIC_ERROR
    );
    return Promise.reject(Object.assign(error, { response }));
  });
};

export const apiCall = (requestType, url, requestBody, requestParams) => {
  let headers = { ...basicHeader };
  
  // if (xsrfToken && xsrfTokenHeader) {
  //   headers[xsrfTokenHeader] = xsrfToken;
  // }
  const requestOptions = {
    method: requestType,
    headers,
    body: requestBody ? JSON.stringify(requestBody) : undefined
  };
  if (requestParams) {
   
    const urlParams = createUrlParams(requestParams);
    url = `${url}?${urlParams}`;
   
  }
  return fetch(url, requestOptions).then(handleResponse);
};
