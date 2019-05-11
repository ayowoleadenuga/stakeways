import {apiCall} from "../../../../_utils/responseHandler";
import  { apiUrls } from "../../../../_constants/apiUrls";

export const historyService = {
  getAllBetsHistory,
  login
  };
  
  function getAllBetsHistory(id) {
    return apiCall("GET", `${apiUrls.history.betHistory}?Id=${id}`);
    //apiCall("GET", `${apiUrls.posts.base}/${id}`);
  }
 //http://webapi.stakeways.a2hosted.com/api/services/app/Bet/GetByUser?Id=10004 
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
  
 
  