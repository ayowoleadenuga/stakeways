import {apiCall} from "../../../../_utils/responseHandler";
import  { apiUrls } from "../../../../_constants/apiUrls";

export const payStackService = {
    getUserDetails,
    createTransaction
  };
  
  function getUserDetails(id) {
   return apiCall("GET", `${apiUrls.userDetails.userData}?Id=${id}`);
    
  }
  function createTransaction(request,id) {
    return apiCall("PUT", `${apiUrls.userDetails.userPayment}?Id=${id}`,request);
  }
  
//   function login(request, id) {
//     const method = id ? "PUT" : "POST";
//     let url = apiUrls.history.login;
//     !!id && (url = `${url}/${id}`);
//     return apiCall(method, url, request);
//   }
  