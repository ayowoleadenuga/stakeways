import {apiCall} from "../../../../_utils/responseHandler";
import  { apiUrls } from "../../../../_constants/apiUrls";

export const historyService = {
  getAllBetsHistory,
  login
  };
  
  function getAllBetsHistory(params) {
    return apiCall("GET", `${apiUrls.history.betHistory}`, null, params);
  }
  
  //pending
//   function getAllTransactionHistory() {
//     return apiCall("GET", `${apiUrls.posts.data}`);
//   }
  
  function login(request, id) {
    const method = id ? "PUT" : "POST";
    let url = apiUrls.history.login;
    !!id && (url = `${url}/${id}`);
    return apiCall(method, url, request);
  }
  
 
  